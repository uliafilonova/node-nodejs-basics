
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'node:fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const readPath = path.join(dirname(currentPath), 'files', 'fileToRead.txt');

const read = async () => {
    fsPromises.readFile(readPath, 'utf-8').then(
        (data) => { console.log(data) },
        (error) => {
            if (error.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        })
};
await read();