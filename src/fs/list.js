import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'node:fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const listPath = path.join(dirname(currentPath), 'files');

const list = async () => {
    fsPromises.readdir(listPath).then(
        (data) => { console.log(data) },
        (error) => {
            if (error.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        })
};

await list();