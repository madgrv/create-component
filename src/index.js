#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const { program } = require('commander');

program
  .version('1.0.0')
  .arguments('<componentName>')
  .option('-d, --dir <pathToDirectory>', 'Path to the "components" directory (default: "src/components")')
  .parse(process.argv);

const [componentName] = program.args;
const options = program.opts();
const dir = options.dir || 'src/components';

const componentDir = path.join(dir, componentName);
const filePath = path.join(componentDir, `${componentName}.tsx`);
const stylePath = path.join(componentDir, `${componentName}.styled.ts`);
const indexPath = path.join(componentDir, 'index.ts');

// Create parent directory if necessary
fs.mkdirSync(path.dirname(componentDir), { recursive: true });

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Create component file
const componentTemplate = `\
import { ${componentName}Container } from './${componentName}.styled';

export const ${componentName} = () => {
    return 
      <${componentName}Container>
      </${componentName}Container>;
};

`;

fs.writeFileSync(filePath, prettier.format(componentTemplate, { parser: 'typescript' }));

// Create styled component file
const styleTemplate = `\
import styled from 'styled-components';

export const ${componentName}Container = styled.div\`
    size: 100%;
\`;
`;

fs.writeFileSync(stylePath, prettier.format(styleTemplate, { parser: 'typescript' }));

// Create index file
const indexTemplate = `\
export * from './${componentName}';
`;

fs.writeFileSync(indexPath, prettier.format(indexTemplate, { parser: 'typescript' }));

console.log(`Component ${componentName} created successfully!`);