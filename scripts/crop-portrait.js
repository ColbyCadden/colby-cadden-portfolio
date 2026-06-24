const path = require("path");
const sharp = require("sharp");

const profileSrc = path.join(__dirname, "../public/images/hero/portrait-source.png");
const outPath = path.join(__dirname, "../public/images/hero/portrait-hero-v2.jpg");

const OUTPUT_WIDTH = 678;
const OUTPUT_HEIGHT = 744;
const TARGET_ASPECT = OUTPUT_WIDTH / OUTPUT_HEIGHT;

async function main() {
  const meta = await sharp(profileSrc).metadata();
  const { width = 768, height = 1024 } = meta;

  const cropLeft = Math.round(width * 0.53);
  const cropTop = Math.round(height * 0.112);
  const cropWidth = Math.round(width * 0.45);
  const cropHeight = Math.round(cropWidth / TARGET_ASPECT);

  await sharp(profileSrc)
    .extract({
      left: cropLeft,
      top: cropTop,
      width: cropWidth,
      height: cropHeight,
    })
    .resize(OUTPUT_WIDTH, OUTPUT_HEIGHT, {
      fit: "fill",
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(outPath);

  console.log("Source:", width, "x", height);
  console.log(
    "Crop:",
    `left=${cropLeft}`,
    `top=${cropTop}`,
    `width=${cropWidth}`,
    `height=${cropHeight}`,
  );
  console.log("Output:", outPath, `${OUTPUT_WIDTH}x${OUTPUT_HEIGHT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
