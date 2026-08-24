import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const INPUT_DIR = 'public/images/temp';
const OUTPUT_DIR = 'public/images/temp';
const SIZES = [320, 640, 960, 1280, 1920];
const INPUT_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const file of fs.readdirSync(INPUT_DIR)) {
  const extension = path.extname(file).toLowerCase();
  const name = path.basename(file, extension);

  if (!INPUT_EXTENSIONS.has(extension)) continue;
  if (SIZES.some((width) => name.endsWith(`-${width}`))) continue;

  const input = path.join(INPUT_DIR, file);

  for (const width of SIZES) {
    const output = path.join(OUTPUT_DIR, `${name}-${width}.webp`);

    await sharp(input).resize({ width }).webp({ quality: 75 }).toFile(output);
    console.log(`Generated ${output}`);
  }
}
