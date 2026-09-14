const sharp = require("sharp");
(async () => {
  try {
    const buf = await sharp("public/IMG_2819.HEIC").resize(64).jpeg().toBuffer();
    console.log("HEIC DECODE OK, bytes:", buf.length);
  } catch (e) {
    console.log("HEIC DECODE FAILED:", String(e.message).split("\n")[0]);
  }
})();
