import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

async function fixDts() {
  try {
    const esDtsPath = join(distDir, 'beansBaseActions.es.d.ts');
    const content = `export { BaseButton, BaseCheckbox, BaseInput, BaseRadio, BaseSelect, BaseTextarea } from './index';`;
    await writeFile(esDtsPath, content, 'utf-8');

    console.log(`Generated correct type definitions at ${esDtsPath}`);
  } catch (error) {
    console.error('Error fixing dts:', error);
    process.exit(1);
  }
}

fixDts();