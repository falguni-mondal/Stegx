const express = require("express");
// const multer = require("multer");
const Jimp = require("jimp");
// const crypto = require("crypto");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const {upload, inpImgName} = require("./configs/multer-config");

app.use(cors({origin : "http://localhost:5173"}));
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const twosComplement = (binaryString) => {
  if (binaryString.length !== 24) {
    return "Binary string must be 24 bits long";
  }

  // 1. Invert the bits (1's complement)
  let invertedString = "";
  for (let bit of binaryString) {
    invertedString += bit === "0" ? "1" : "0";
  }

  // 2. Add 1 to the 1's complement
  let carry = 1;
  let result = "";
  for (let i = invertedString.length - 1; i >= 0; i--) {
    let sum = parseInt(invertedString[i]) + carry;
    result = (sum % 2).toString() + result;
    carry = Math.floor(sum / 2);
  }

  return result;
};

const keyGenerator = (rnd, avg, len) => {
  const keyParts = [
    parseInt(rnd, 2).toString(16),
    avg.toString(16),
    len.toString(16),
  ];

  let key = keyParts[0];

  for (let i = 1; i < keyParts.length; i++) {
    const seperator = String.fromCharCode(Math.floor(Math.random() * 20 + 71));
    key = key + seperator + keyParts[i]
  }
  return key;
};

app.post("/stegx", upload.single("image"), (req, res) => {
  const image = req.file;
  const { text, action } = req.body;

  const randomNumber = Math.floor(Math.random() * 2 ** 24); // Range: 0 to 16777215
  const ran = randomNumber.toString(2).padStart(24, "0"); // Ensure 24 bits

  const asciiArr = message.split("").map((char) => char.charCodeAt(0));

  const avg = Math.floor(
    asciiArr.reduce((sum, num) => sum + num, 0) / asciiArr.length
  );

  const multiplied = asciiArr.map((ascii) => ascii * avg);

  const twosComplement24bit = twosComplement(ran);

  const DeciTwosCom = parseInt(twosComplement24bit, 2);

  const subtracted = multiplied.map((num) =>
    (DeciTwosCom - num).toString(2).padStart(24, "0")
  );

  const key = keyGenerator(ran, avg, message.length);


});

app.get("/", (req, res) => {
  const message = "Help me!";
  const randomNumber = Math.floor(Math.random() * 2 ** 24); // Range: 0 to 16777215
  const ran = randomNumber.toString(2).padStart(24, "0"); // Ensure 24 bits

  const asciiArr = message.split("").map((char) => char.charCodeAt(0));

  const avg = Math.floor(
    asciiArr.reduce((sum, num) => sum + num, 0) / asciiArr.length
  );

  const multiplied = asciiArr.map((ascii) => ascii * avg);

  const twosComplement24bit = twosComplement(ran);

  const DeciTwosCom = parseInt(twosComplement24bit, 2);

  const subtracted = multiplied.map((num) =>
    (DeciTwosCom - num).toString(2).padStart(24, "0")
  );

  const key = keyGenerator(ran, avg, message.length);


  res.json(key);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
