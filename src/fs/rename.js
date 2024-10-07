
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'node:fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const oldPath = path.join(dirname(currentPath), 'files', 'wrongFilename.txt');
const newPath = path.join(dirname(currentPath), 'files', 'properFilename.md');

async function isExistPath(path) {
    try {
        await fsPromises.access(path, fsPromises.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
const rename = async () => {
    if (!(await isExistPath(oldPath)) || await isExistPath(newPath)) {
        throw new Error('FS operation failed');
    }
    else {
        await fsPromises.rename(oldPath, newPath)
    }
};

await rename();

