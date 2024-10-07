
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'node:fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const deletetPath = path.join(dirname(currentPath), 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fsPromises.rm(deletetPath);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await remove();