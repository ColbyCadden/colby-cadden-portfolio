const fs = require("fs");
const path = require("path");

function createPlaceholder(label, width = 800, height = 600) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect fill="#141922" width="${width}" height="${height}"/>
  <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="#22d3ee" stroke-opacity="0.06" stroke-width="1"/>
  <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="#22d3ee" stroke-opacity="0.06" stroke-width="1"/>
  <text x="${width / 2}" y="${height / 2}" text-anchor="middle" dominant-baseline="middle" fill="#22d3ee" opacity="0.35" font-family="monospace" font-size="14">${label}</text>
</svg>`;
}

function createResumePdf() {
  return `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj
4 0 obj<</Length 68>>stream
BT /F1 20 Tf 72 720 Td (Colby Cadden - Resume Placeholder) Tj ET
endstream
endobj
5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000384 00000 n 
trailer<</Size 6/Root 1 0 R>>
startxref
457
%%EOF`;
}

const placeholders = [
  ["public/images/hero/hero-placeholder.svg", "HERO", 1200, 900],
  ["public/images/projects/robotic-arm/thumbnail.svg", "ROBOTIC ARM"],
  ["public/images/projects/robotic-arm/hero.svg", "ROBOTIC ARM — HERO", 1200, 675],
  ["public/images/projects/robotic-arm/detail-1.svg", "ROBOTIC ARM — DETAIL"],
  ["public/images/projects/waterborne-rescue-vessel/thumbnail.svg", "RESCUE VESSEL"],
  ["public/images/projects/waterborne-rescue-vessel/hero.svg", "RESCUE VESSEL — HERO", 1200, 675],
  ["public/images/projects/waterborne-rescue-vessel/detail-1.svg", "RESCUE VESSEL — DETAIL"],
  ["public/images/projects/hackathons/thumbnail.svg", "HACKATHONS"],
  ["public/images/projects/hackathons/hero.svg", "HACKATHONS — HERO", 1200, 675],
  ["public/images/projects/hackathons/detail-1.svg", "HACKATHONS — DETAIL"],
  ["public/images/projects/portfolio-rebuild/thumbnail.svg", "PORTFOLIO REBUILD"],
  ["public/images/projects/portfolio-rebuild/hero.svg", "PORTFOLIO — HERO", 1200, 675],
  ["public/images/projects/portfolio-rebuild/detail-1.svg", "PORTFOLIO — DETAIL"],
  ["public/images/gallery/photo-1.svg", "GALLERY 01"],
  ["public/images/gallery/photo-2.svg", "GALLERY 02", 600, 800],
  ["public/images/gallery/photo-3.svg", "GALLERY 03", 600, 600],
  ["public/images/gallery/photo-4.svg", "GALLERY 04", 1200, 675],
  ["public/images/gallery/photo-5.svg", "GALLERY 05"],
  ["public/images/gallery/photo-6.svg", "GALLERY 06", 600, 800],
  ["public/images/gallery/achievement-1.svg", "ACHIEVEMENT 01"],
  ["public/images/gallery/achievement-2.svg", "ACHIEVEMENT 02"],
  ["public/images/gallery/resume-preview.svg", "RESUME PREVIEW", 680, 880],
];

async function generatePortraitJpg() {
  const sharp = require("sharp");
  const portraitPath = path.join(__dirname, "..", "public/images/hero/portrait.jpg");

  const svg = `<svg width="800" height="1067" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a2332"/>
        <stop offset="100%" style="stop-color:#0d1117"/>
      </linearGradient>
    </defs>
    <rect width="800" height="1067" fill="url(#bg)"/>
    <ellipse cx="400" cy="380" rx="120" ry="140" fill="#243044"/>
    <rect x="280" y="520" width="240" height="320" rx="40" fill="#243044"/>
    <text x="400" y="920" text-anchor="middle" fill="#22d3ee" opacity="0.3" font-family="monospace" font-size="13">PORTRAIT PLACEHOLDER</text>
  </svg>`;

  fs.mkdirSync(path.dirname(portraitPath), { recursive: true });
  await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(portraitPath);
}

async function main() {
  for (const [filePath, label, w = 800, h = 600] of placeholders) {
    const fullPath = path.join(__dirname, "..", filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, createPlaceholder(label, w, h));
  }

  fs.mkdirSync(path.join(__dirname, "..", "public/videos"), { recursive: true });
  fs.writeFileSync(
    path.join(__dirname, "..", "public/videos/.gitkeep"),
    "# Placeholder for video assets\n",
  );

  fs.writeFileSync(
    path.join(__dirname, "..", "public/resume.pdf"),
    createResumePdf(),
  );

  await generatePortraitJpg();

  console.log(`Created ${placeholders.length} placeholder images, portrait.jpg, and resume.pdf.`);
}

main().catch(console.error);
