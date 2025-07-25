import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the variables.json file
const variablesPath = path.join(__dirname, '../../variables.json');
const variablesData = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

// Helper function to convert RGBA to hex or rgba string
function rgbaToString({ r, g, b, a }) {
  if (a === 1) {
    // Convert to hex
    const toHex = (n) => Math.round(n).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  } else {
    // Use rgba
    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
  }
}

// Helper function to convert Figma variable name to Tailwind-friendly name
function cleanVariableName(name) {
  return name
    .replace(/^[✦🎨▲●]\//, '') // Remove emoji prefixes
    .replace(/\//g, '-') // Replace slashes with hyphens
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, ''); // Remove any remaining special characters
}

// Extract all color variables and their values
const colorMap = new Map();
const colorVariables = {};

// First pass: collect all direct color values
variablesData.collections.forEach(collection => {
  if (collection.name === 'Colors') {
    collection.modes.forEach(mode => {
      mode.variables.forEach(variable => {
        if (variable.type === 'color' && !variable.isAlias && variable.value.r !== undefined) {
          const colorValue = rgbaToString(variable.value);
          colorMap.set(variable.name, colorValue);
          
          const cleanName = cleanVariableName(variable.name);
          if (cleanName) {
            colorVariables[cleanName] = colorValue;
          }
        }
      });
    });
  }
});

// Second pass: resolve aliases
variablesData.collections.forEach(collection => {
  if (collection.name === 'Colors') {
    collection.modes.forEach(mode => {
      mode.variables.forEach(variable => {
        if (variable.type === 'color' && variable.isAlias) {
          const referencedColor = colorMap.get(variable.value.name);
          if (referencedColor) {
            const cleanName = cleanVariableName(variable.name);
            if (cleanName) {
              colorVariables[cleanName] = referencedColor;
            }
          }
        }
      });
    });
  }
});

// Group colors by category
const colorGroups = {
  text: {},
  bg: {},
  border: {},
  icon: {},
  special: {},
  palette: {
    white: {},
    black: {},
    grey: {},
    blue: {},
    red: {},
    green: {},
    yellow: {},
    purple: {},
    pink: {},
    orange: {},
    teal: {},
  }
};

// Organize colors into groups
Object.entries(colorVariables).forEach(([name, value]) => {
  const parts = name.split('-');
  const category = parts[0];
  
  if (category === 'text') {
    colorGroups.text[name.replace('text-', '')] = value;
  } else if (category === 'bg') {
    colorGroups.bg[name.replace('bg-', '')] = value;
  } else if (category === 'border') {
    colorGroups.border[name.replace('border-', '')] = value;
  } else if (category === 'icon') {
    colorGroups.icon[name.replace('icon-', '')] = value;
  } else if (category === 'special') {
    colorGroups.special[name.replace('special-', '')] = value;
  } else {
    // Check if it's a palette color
    const paletteColors = ['white', 'black', 'grey', 'blue', 'red', 'green', 'yellow', 'purple', 'pink', 'orange', 'teal'];
    const paletteColor = paletteColors.find(color => name.startsWith(color));
    if (paletteColor) {
      const shade = name.replace(`${paletteColor}-`, '');
      colorGroups.palette[paletteColor][shade] = value;
    }
  }
});

// Generate Tailwind config content
let tailwindConfig = `// Figma UI3 Variable Colors
// Auto-generated from variables.json

const figmaColors = {
`;

// Add text colors
if (Object.keys(colorGroups.text).length > 0) {
  tailwindConfig += `  text: {\n`;
  Object.entries(colorGroups.text).forEach(([name, value]) => {
    tailwindConfig += `    '${name}': '${value}',\n`;
  });
  tailwindConfig += `  },\n`;
}

// Add background colors
if (Object.keys(colorGroups.bg).length > 0) {
  tailwindConfig += `  bg: {\n`;
  Object.entries(colorGroups.bg).forEach(([name, value]) => {
    tailwindConfig += `    '${name}': '${value}',\n`;
  });
  tailwindConfig += `  },\n`;
}

// Add border colors
if (Object.keys(colorGroups.border).length > 0) {
  tailwindConfig += `  border: {\n`;
  Object.entries(colorGroups.border).forEach(([name, value]) => {
    tailwindConfig += `    '${name}': '${value}',\n`;
  });
  tailwindConfig += `  },\n`;
}

// Add icon colors
if (Object.keys(colorGroups.icon).length > 0) {
  tailwindConfig += `  icon: {\n`;
  Object.entries(colorGroups.icon).forEach(([name, value]) => {
    tailwindConfig += `    '${name}': '${value}',\n`;
  });
  tailwindConfig += `  },\n`;
}

// Add special colors
if (Object.keys(colorGroups.special).length > 0) {
  tailwindConfig += `  special: {\n`;
  Object.entries(colorGroups.special).forEach(([name, value]) => {
    tailwindConfig += `    '${name}': '${value}',\n`;
  });
  tailwindConfig += `  },\n`;
}

// Add palette colors
Object.entries(colorGroups.palette).forEach(([colorName, shades]) => {
  if (Object.keys(shades).length > 0) {
    tailwindConfig += `  ${colorName}: {\n`;
    Object.entries(shades).forEach(([shade, value]) => {
      tailwindConfig += `    '${shade}': '${value}',\n`;
    });
    tailwindConfig += `  },\n`;
  }
});

tailwindConfig += `};\n\nexport default figmaColors;\n`;

// Write the output file
const outputPath = path.join(__dirname, '../src/lib/styles/figma-colors.js');
fs.writeFileSync(outputPath, tailwindConfig);

console.log(`✅ Extracted ${Object.keys(colorVariables).length} color variables`);
console.log(`📁 Output saved to: ${outputPath}`);

// Also create a CSS file with custom properties
let cssContent = `/* Figma UI3 Color Variables */
/* Auto-generated from variables.json */

:root {
`;

Object.entries(colorVariables).forEach(([name, value]) => {
  cssContent += `  --figma-${name}: ${value};\n`;
});

cssContent += `}\n`;

const cssOutputPath = path.join(__dirname, '../src/lib/styles/figma-variables.css');
fs.writeFileSync(cssOutputPath, cssContent);

console.log(`📁 CSS variables saved to: ${cssOutputPath}`);