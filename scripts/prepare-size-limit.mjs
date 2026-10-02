import { copyFile, mkdir, readFile, rm } from 'node:fs/promises';
import { basename, join } from 'node:path';

const nextDirectory = '.next';
const outputDirectory = join(nextDirectory, 'size-limit');

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function readAppPageFiles() {
  try {
    const manifest = await readJson(join(nextDirectory, 'app-build-manifest.json'));
    return manifest.pages?.['/page'] ?? [];
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

const buildManifest = await readJson(join(nextDirectory, 'build-manifest.json'));
const files = new Set([...buildManifest.rootMainFiles, ...(await readAppPageFiles())]);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await Promise.all(
  [...files].map((file) =>
    copyFile(join(nextDirectory, file), join(outputDirectory, basename(file))),
  ),
);
