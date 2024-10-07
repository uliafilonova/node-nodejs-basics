
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fsPromises from 'node:fs/promises';

async function isExistPath(path) {
    try {
        await fsPromises.access(path, fsPromises.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

const currentPath = fileURLToPath(import.meta.url);
const originPath = path.join(dirname(currentPath), 'files');
const copyPath = path.join(dirname(currentPath), 'files_copy');

const copy = async () => {
    if (await isExistPath(copyPath) || !(await isExistPath(originPath))) {
        throw new Error('FS operation failed');
    }
    else {
        await Promise.all([fsPromises.mkdir(copyPath), fsPromises.cp(originPath, copyPath, { recursive: true })])
    }
}
await copy();

