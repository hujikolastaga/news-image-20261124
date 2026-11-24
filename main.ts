// Entry for news-image-20261124: copies the 1024x1024 editorial broadsheet entry.png
// to /output/entry.png (or MAKEFUN_OUTPUT_DIR/entry.png) deterministically.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const srcPath = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, join(outDir, 'entry.png'));
