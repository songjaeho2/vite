import { readdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import sharp from 'sharp';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : path;
  }));
  return files.flat();
}

const images = (await walk('src/assets/img'))
  .filter((file) => ['.jpg', '.jpeg'].includes(extname(file).toLowerCase()));

for (const source of images) {
  const destination = source.replace(/\.jpe?g$/i, '.webp');
  await sharp(source)
    .rotate()
    .webp({ quality: 90, smartSubsample: true, effort: 6 })
    .toFile(destination);
}

console.log(`Optimized ${images.length} images.`);
