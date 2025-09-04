const sharp = require("sharp");

const extractBinaryFromImage = async (imgPath, totalBitsNeeded) => {
  // Load image metadata
  const image = sharp(imgPath);
  const { width, height, channels } = await image.metadata();

  // Extract raw pixel buffer
  const buffer = await image.raw().toBuffer();

  let bits = "";
  let pixelIndex = 0;

  // Each pixel gives 6 bits (2 from R, 2 from G, 2 from B)
  const totalPixels = Math.ceil(totalBitsNeeded / 6);

  for (let i = 0; i < totalPixels; i++) {
    const idx = pixelIndex * channels;

    if (idx + 2 >= buffer.length) {
      throw new Error("Not enough pixels in image.");
    }

    const r = buffer[idx];
    const g = buffer[idx + 1];
    const b = buffer[idx + 2];

    bits += (r & 0b11).toString(2).padStart(2, "0");
    bits += (g & 0b11).toString(2).padStart(2, "0");
    bits += (b & 0b11).toString(2).padStart(2, "0");

    pixelIndex++;
  }

  return bits;
};

module.exports = extractBinaryFromImage;
