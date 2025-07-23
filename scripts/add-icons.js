#!/usr/bin/env node

/**
 * Script to add new icons to the icon system
 * Usage: node scripts/add-icons.js
 * 
 * This script will:
 * 1. Copy icons from the root icons folder to src/lib/icons
 * 2. Rename them to remove prefixes
 * 3. Update the icons/index.ts file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootIconsDir = path.join(__dirname, '../../../icons/24px/Common');
const targetIconsDir = path.join(__dirname, '../src/lib/icons');
const indexPath = path.join(targetIconsDir, 'index.ts');

// Icons to add (you can modify this list)
const iconsToAdd = [
  'icon.24.eye.small.svg',
  'icon.24.lock.locked.svg', 
  'icon.24.lock.open.svg',
  'icon.24.copy.small.svg',
  'icon.24.link.svg',
  'icon.24.folder.svg',
  'icon.24.home.svg',
  'icon.24.help.svg',
  'icon.24.info.small.svg',
  'icon.24.warning.small.svg',
];

// Function to convert icon filename to camelCase
function iconNameToCamelCase(filename) {
  return filename
    .replace('icon.24.', '')
    .replace('.svg', '')
    .replace(/\.(.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toLowerCase());
}

// Copy and rename icons
iconsToAdd.forEach(iconFile => {
  const sourcePath = path.join(rootIconsDir, iconFile);
  const iconName = iconNameToCamelCase(iconFile);
  const targetPath = path.join(targetIconsDir, `${iconName}.svg`);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${iconFile} → ${iconName}.svg`);
  } else {
    console.warn(`Icon not found: ${iconFile}`);
  }
});

// Update index.ts
const iconFiles = fs.readdirSync(targetIconsDir)
  .filter(file => file.endsWith('.svg'))
  .sort();

const imports = iconFiles.map(file => {
  const name = file.replace('.svg', '');
  const varName = name.replace(/-(.)/g, (_, char) => char.toUpperCase()) + 'Icon';
  return `import ${varName} from './${file}?raw';`;
}).join('\n');

const iconObject = iconFiles.map(file => {
  const name = file.replace('.svg', '');
  const varName = name.replace(/-(.)/g, (_, char) => char.toUpperCase()) + 'Icon';
  return `  '${name}': ${varName},`;
}).join('\n');

const indexContent = `// Icon registry - importing all SVGs as raw strings
${imports}

export const icons = {
${iconObject}
} as const;

export type IconName = keyof typeof icons;

// Helper to extract SVG path content
export function extractSvgPath(svgString: string): string {
  const pathMatches = svgString.match(/<path[^>]*\\/>/g) || [];
  return pathMatches.join('');
}`;

fs.writeFileSync(indexPath, indexContent);
console.log('\nUpdated icons/index.ts with all icons');
console.log(`Total icons: ${iconFiles.length}`);