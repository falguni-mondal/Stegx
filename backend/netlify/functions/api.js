import express, {Router} from "express";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

import { upload } from "../../configs/multer-config";
import embedMessageInImage from "../../functions/embeding/messageEmbeder";
import encryption from "../../functions/embeding/encryption";
import decryption from "../../functions/retrieving/decryption";
import keyExtractor from "../../utils/keyExtractor";
import extractBinaryFromImage from "../../functions/retrieving/binaryRetriever";
import deleteAllFiles from "../../functions/deleteAllFiles";


const app = express();
const router = Router();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://stegx.netlify.app"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const uploadDir = "/tmp/uploads";
const outputDir = "/tmp/output";

// Ensure 'uploads' and 'output' folders exist
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, {recursive: true});
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, {recursive: true});


router.post("/stegx", upload.single("image"), async (req, res) => {
  const image = req.file;
  const { text, action } = req.body;
  const inpImgPath = `${uploadDir}/${image.filename}`;
  const outImgPath = `${outputDir}/${image.filename}`;

  if (action === "encrypt") {
    const { binaryDataArr, key } = encryption(text);
    await embedMessageInImage(inpImgPath, outImgPath, binaryDataArr);

    // Send the image as base64
    fs.readFile(outImgPath, (err, data) => {
      if (err) {
        console.error("Error reading output image:", err);
        return res
          .status(500)
          .json({ success: false, error: err });
      }

      const base64Image = data.toString("base64");

      res.status(200).json({
        success: true,
        text: key,
        image: `data:image/png;base64,${base64Image}`,
      });
    });

    deleteAllFiles(uploadDir);
    deleteAllFiles(outputDir);
  } else {
    try {
      const { ran, avg, len } = keyExtractor(text);
      const totalBits = len * 24;

      const bitStream = await extractBinaryFromImage(inpImgPath, totalBits);

      const message = decryption(bitStream, ran, avg, len);

      deleteAllFiles(uploadDir);
      deleteAllFiles(outputDir);

      res.status(200).json({ success: true, text: message });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err });
    }
  }
});


app.use("/", router)
export const handler = serverless(app);