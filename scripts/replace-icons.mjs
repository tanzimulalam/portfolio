import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const repoRoot = process.cwd();
const iconsDir = path.join(repoRoot, "public", "icons");
const sourcePath = path.join(repoRoot, "_icon_source.png");

const EXCLUDE = new Set(["desc.png"]);

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await fileExists(sourcePath))) {
    throw new Error(`Missing source image at ${sourcePath}`);
  }
  if (!(await fileExists(iconsDir))) {
    throw new Error(`Missing icons directory at ${iconsDir}`);
  }

  const source = sharp(sourcePath).ensureAlpha();
  const files = await fs.readdir(iconsDir);

  // Update PNG icons by matching each existing PNG's dimensions.
  const pngFiles = files.filter(
    (f) => f.toLowerCase().endsWith(".png") && !EXCLUDE.has(f)
  );

  for (const file of pngFiles) {
    const outPath = path.join(iconsDir, file);
    const meta = await sharp(outPath).metadata();
    const width = meta.width ?? 0;
    const height = meta.height ?? 0;
    if (!width || !height) {
      // If we can't determine size, skip rather than guessing.
      continue;
    }

    await source
      .clone()
      .resize(width, height, { fit: "cover" })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
  }

  // Update ICO icons with a multi-size favicon.
  const icoFiles = files.filter((f) => f.toLowerCase().endsWith(".ico"));
  if (icoFiles.length) {
    const sizes = [16, 32, 48, 64, 128, 256];
    const buffers = await Promise.all(
      sizes.map((s) =>
        source
          .clone()
          .resize(s, s, { fit: "cover" })
          .png({ compressionLevel: 9 })
          .toBuffer()
      )
    );
    const icoBuffer = await pngToIco(buffers);
    await Promise.all(
      icoFiles.map((f) => fs.writeFile(path.join(iconsDir, f), icoBuffer))
    );
  }

  console.log(
    `Updated ${pngFiles.length} PNG(s) and ${icoFiles.length} ICO(s) in ${iconsDir} (excluded: ${[
      ...EXCLUDE,
    ].join(", ")})`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

