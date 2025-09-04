const sharp = require("sharp");

const embedMessageInImage = async (inputImagePath, outputImagePath, binaryDataArray) => {
  // Load image metadata
  const image = sharp(inputImagePath);
  const { width, height, channels } = await image.metadata();

  // Extract raw pixel buffer (RGBA or RGB)
  let buffer = await image.raw().toBuffer();

  let pixelIndex = 0;

  for (let binary of binaryDataArray) {
    for (let i = 0; i < 4; i++) {
      const idx = pixelIndex * channels;

      // Agar pixels image size se exceed kare to error
      if (idx + 2 >= buffer.length) {
        throw new Error("Image too small to embed message.");
      }

      const bitIdx = i * 6;

      // R channel
      buffer[idx] = (buffer[idx] & 0b11111100) | parseInt(binary.slice(bitIdx, bitIdx + 2), 2);

      // G channel
      buffer[idx + 1] =
        (buffer[idx + 1] & 0b11111100) | parseInt(binary.slice(bitIdx + 2, bitIdx + 4), 2);

      // B channel
      buffer[idx + 2] =
        (buffer[idx + 2] & 0b11111100) | parseInt(binary.slice(bitIdx + 4, bitIdx + 6), 2);

      // Alpha channel untouched (agar exist karta hai)
      // buffer[idx + 3] = buffer[idx + 3];

      pixelIndex++;
    }
  }

  // Write modified buffer back to file
  await sharp(buffer, {
    raw: { width, height, channels },
  })
    .toFormat("png") // always output PNG (lossless)
    .toFile(outputImagePath);
};

module.exports = embedMessageInImage;