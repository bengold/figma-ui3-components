import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../src/lib/icons');
const outputFile = path.join(iconsDir, 'index.ts');

// Read all SVG files
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

// Separate by size
const icons16 = files.filter(f => f.includes('.16.')).sort();
const icons24 = files.filter(f => f.includes('.24.')).sort();

// Generate import names and icon names
function generateImportName(filename) {
  // icon.16.ai.sort.svg -> ai_sort_16
  // icon.16.component-property.svg -> component_property_16
  const parts = filename.replace('.svg', '').split('.');
  const size = parts[1];
  const nameParts = parts.slice(2);
  // Replace hyphens with underscores in the name parts
  const joinedName = nameParts.join('_').replace(/-/g, '_');
  return `${joinedName}_${size}`;
}

function generateIconName(filename) {
  // icon.16.ai.sort.svg -> ai-sort
  const parts = filename.replace('.svg', '').split('.');
  const nameParts = parts.slice(2);
  return nameParts.join('-');
}

// Generate the index.ts content
let content = `// Icon registry - auto-generated
// Icons are organized by size (16px and 24px)

`;

// 16px imports
content += '// 16px icons\n';
icons16.forEach(file => {
  const importName = generateImportName(file);
  content += `import ${importName} from './${file}?raw';\n`;
});

content += '\n// 24px icons\n';
icons24.forEach(file => {
  const importName = generateImportName(file);
  content += `import ${importName} from './${file}?raw';\n`;
});

// Generate iconsBySize object
content += `
export const iconsBySize = {
  16: {
`;

icons16.forEach(file => {
  const importName = generateImportName(file);
  const iconName = generateIconName(file);
  content += `    '${iconName}': ${importName},\n`;
});

content += `  },
  24: {
`;

icons24.forEach(file => {
  const importName = generateImportName(file);
  const iconName = generateIconName(file);
  content += `    '${iconName}': ${importName},\n`;
});

content += `  }
} as const;

// Icon groups for organization in Storybook
export const iconGroups = {
`;

// Group icons by category
const groups = {
  autolayout: [],
  boolean: [],
  ui: [],
  device: [],
  variable: [],
  design: [],
  status: [],
  navigation: [],
  text: [],
  action: [],
  layout: [],
  other: []
};

// Categorize all icons (16px only for groups)
icons16.forEach(file => {
  const iconName = generateIconName(file);
  
  if (iconName.includes('autolayout')) {
    groups.autolayout.push(iconName);
  } else if (iconName.includes('boolean')) {
    groups.boolean.push(iconName);
  } else if (['drag-handle', 'link', 'linkedobject', 'more', 'pen', 'plus', 'refresh', 'reset', 'search', 'wand'].includes(iconName)) {
    groups.ui.push(iconName);
  } else if (['desktop', 'mobile', 'tablet'].includes(iconName)) {
    groups.device.push(iconName);
  } else if (iconName.includes('variable')) {
    groups.variable.push(iconName);
  } else if (['component', 'design', 'dev', 'frame', 'group', 'instance', 'mask', 'prototype'].some(term => iconName.includes(term))) {
    groups.design.push(iconName);
  } else if (['check', 'close', 'help', 'hidden', 'info', 'lock', 'visible', 'warning', 'approved'].some(term => iconName.includes(term))) {
    groups.status.push(iconName);
  } else if (['arrow', 'chevron', 'navigate', 'back', 'forward', 'next'].some(term => iconName.includes(term))) {
    groups.navigation.push(iconName);
  } else if (['text', 'font', 'align', 'bold', 'italic'].some(term => iconName.includes(term))) {
    groups.text.push(iconName);
  } else if (iconName.includes('action')) {
    groups.action.push(iconName);
  } else if (iconName.includes('layout')) {
    groups.layout.push(iconName);
  } else {
    groups.other.push(iconName);
  }
});

// Write groups
Object.entries(groups).forEach(([groupName, icons]) => {
  if (icons.length > 0) {
    content += `    ${groupName}: [\n`;
    icons.forEach(icon => {
      content += `      { name: '${icon}' },\n`;
    });
    content += `    ],\n`;
  }
});

content += `};

// All available icon names
export type IconName = keyof typeof iconsBySize[16] | keyof typeof iconsBySize[24];

// Helper to get icon by name and size
export function getIcon(name: string, size: 16 | 24 = 16): string | undefined {
  const sizeIcons = iconsBySize[size];
  return sizeIcons?.[name as keyof typeof sizeIcons];
}

// Helper to extract SVG content with proper viewBox
export function extractSvgContent(svgString: string): { viewBox: string; paths: string } {
  const viewBoxMatch = svgString.match(/viewBox="([^"]*)"/);
  const pathMatches = svgString.match(/<path[^>]*\\/>/g) || [];
  
  return {
    viewBox: viewBoxMatch?.[1] || '0 0 16 16',
    paths: pathMatches.join('')
  };
}

// Legacy icons object for backward compatibility
export const icons = iconsBySize[24];
`;

// Write the file
fs.writeFileSync(outputFile, content);

console.log(`Generated index.ts with ${icons16.length} 16px icons and ${icons24.length} 24px icons`);