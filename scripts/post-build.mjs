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
    // Generate correct entry file that re-exports from the correct relative paths
    const content = `export { default as BaseButton } from './src/components/BaseButton.vue';
export { default as BaseSelect } from './src/components/BaseSelect.vue';
export { default as BaseInput } from './src/components/BaseInput.vue';`;
    await writeFile(esDtsPath, content, 'utf-8');

    console.log(`Generated correct type definitions at ${esDtsPath}`);
  } catch (error) {
    console.error('Error fixing dts:', error);
    process.exit(1);
  }
}

fixDts();