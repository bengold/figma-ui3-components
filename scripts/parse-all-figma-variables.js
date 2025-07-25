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
    .replace(/^[✦🎨▲●□◆→↗↘↙↖]\//, '') // Remove emoji prefixes
    .replace(/\//g, '-') // Replace slashes with hyphens
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, ''); // Remove any remaining special characters
}

// Extract all variables by type
const variables = {
  colors: {},
  numbers: {},
  dimensions: {},
  spacing: {},
  radius: {},
  opacity: {},
  typography: {}
};

// Maps to resolve aliases
const maps = {
  color: new Map(),
  number: new Map()
};

// First pass: collect all direct values
variablesData.collections.forEach(collection => {
  collection.modes.forEach(mode => {
    mode.variables.forEach(variable => {
      if (!variable.isAlias) {
        if (variable.type === 'color' && variable.value.r !== undefined) {
          const colorValue = rgbaToString(variable.value);
          maps.color.set(variable.name, colorValue);
        } else if (variable.type === 'number') {
          maps.number.set(variable.name, variable.value);
        }
      }
    });
  });
});

// Second pass: resolve aliases and categorize
variablesData.collections.forEach(collection => {
  collection.modes.forEach(mode => {
    mode.variables.forEach(variable => {
      const cleanName = cleanVariableName(variable.name);
      if (!cleanName) return;

      if (variable.type === 'color') {
        let value;
        if (variable.isAlias) {
          value = maps.color.get(variable.value.name);
        } else if (variable.value.r !== undefined) {
          value = rgbaToString(variable.value);
        }
        if (value) {
          variables.colors[cleanName] = value;
        }
      } else if (variable.type === 'number') {
        let value;
        if (variable.isAlias) {
          value = maps.number.get(variable.value.name);
        } else {
          value = variable.value;
        }
        
        if (value !== undefined) {
          // Categorize number variables
          if (cleanName.includes('spacing') || cleanName.includes('gap') || cleanName.includes('padding') || cleanName.includes('margin')) {
            variables.spacing[cleanName] = `${value}px`;
          } else if (cleanName.includes('radius') || cleanName.includes('corner')) {
            variables.radius[cleanName] = `${value}px`;
          } else if (cleanName.includes('opacity') || cleanName.includes('alpha')) {
            variables.opacity[cleanName] = value;
          } else if (cleanName.includes('size') || cleanName.includes('width') || cleanName.includes('height')) {
            variables.dimensions[cleanName] = `${value}px`;
          } else if (cleanName.includes('font') || cleanName.includes('text') || cleanName.includes('line')) {
            variables.typography[cleanName] = value;
          } else {
            variables.numbers[cleanName] = value;
          }
        }
      }
    });
  });
});

// Generate comprehensive Tailwind config
let tailwindExtend = `// Figma UI3 Design System Variables
// Auto-generated from variables.json

export const figmaVariables = {
  colors: ${JSON.stringify(variables.colors, null, 2)},
  
  spacing: ${JSON.stringify(variables.spacing, null, 2)},
  
  borderRadius: ${JSON.stringify(variables.radius, null, 2)},
  
  opacity: ${JSON.stringify(variables.opacity, null, 2)},
  
  width: ${JSON.stringify(variables.dimensions, null, 2)},
  
  height: ${JSON.stringify(variables.dimensions, null, 2)},
  
  fontSize: ${JSON.stringify(
    Object.entries(variables.typography)
      .filter(([key]) => key.includes('font-size') || key.includes('text-size'))
      .reduce((acc, [key, val]) => ({ ...acc, [key]: [`${val}px`, { lineHeight: '1.5' }] }), {}),
    null,
    2
  )},
  
  lineHeight: ${JSON.stringify(
    Object.entries(variables.typography)
      .filter(([key]) => key.includes('line-height'))
      .reduce((acc, [key, val]) => ({ ...acc, [key]: `${val}px` }), {}),
    null,
    2
  )},
  
  letterSpacing: ${JSON.stringify(
    Object.entries(variables.typography)
      .filter(([key]) => key.includes('letter-spacing'))
      .reduce((acc, [key, val]) => ({ ...acc, [key]: `${val}px` }), {}),
    null,
    2
  )},
};

export default figmaVariables;
`;

// Write the output file
const outputPath = path.join(__dirname, '../src/lib/styles/figma-variables-all.js');
fs.writeFileSync(outputPath, tailwindExtend);

console.log(`✅ Extracted variables:`);
console.log(`   - ${Object.keys(variables.colors).length} colors`);
console.log(`   - ${Object.keys(variables.spacing).length} spacing values`);
console.log(`   - ${Object.keys(variables.radius).length} border radius values`);
console.log(`   - ${Object.keys(variables.opacity).length} opacity values`);
console.log(`   - ${Object.keys(variables.dimensions).length} dimension values`);
console.log(`   - ${Object.keys(variables.typography).length} typography values`);
console.log(`📁 Output saved to: ${outputPath}`);

// Also update the CSS file with all custom properties
let cssContent = `/* Figma UI3 Design System Variables */
/* Auto-generated from variables.json */

:root {
  /* Colors */
${Object.entries(variables.colors).map(([name, value]) => `  --figma-${name}: ${value};`).join('\n')}

  /* Spacing */
${Object.entries(variables.spacing).map(([name, value]) => `  --figma-${name}: ${value};`).join('\n')}

  /* Border Radius */
${Object.entries(variables.radius).map(([name, value]) => `  --figma-${name}: ${value};`).join('\n')}

  /* Opacity */
${Object.entries(variables.opacity).map(([name, value]) => `  --figma-${name}: ${value};`).join('\n')}

  /* Dimensions */
${Object.entries(variables.dimensions).map(([name, value]) => `  --figma-${name}: ${value};`).join('\n')}

  /* Typography */
${Object.entries(variables.typography).map(([name, value]) => `  --figma-${name}: ${value};`).join('\n')}
}
`;

const cssOutputPath = path.join(__dirname, '../src/lib/styles/figma-variables-all.css');
fs.writeFileSync(cssOutputPath, cssContent);

console.log(`📁 CSS variables saved to: ${cssOutputPath}`);