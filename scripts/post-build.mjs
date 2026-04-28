import { readFile, writeFile, copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

async function fixDts() {
  try {
    // Read the generated index.d.ts
    const indexPath = join(distDir, 'src', 'components', 'index.d.ts');
    const content = await readFile(indexPath, 'utf-8');
    
    // Write to beansBaseActions.es.d.ts
    const esDtsPath = join(distDir, 'beansBaseActions.es.d.ts');
    await writeFile(esDtsPath, content, 'utf-8');
    
    console.log(`Fixed ${esDtsPath} with content from ${indexPath}`);
  } catch (error) {
    console.error('Error fixing dts:', error);
    process.exit(1);
  }
}

fixDts();