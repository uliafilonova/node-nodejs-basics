import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import fs from 'node:fs';
import streamPromises from 'node:stream/promises';
import zlib from 'zlib';


const currentPath = fileURLToPath(import.meta.url);
const sourcePath = path.join(dirname(currentPath), "files", "fileToCompress.txt");
const destinationPath = path.join(dirname(currentPath), "files", "archive.gz");
const decompress = async () => {
    try {
        await streamPromises.pipeline(
            fs.createReadStream(destinationPath),
            zlib.createGunzip(),
            fs.createWriteStream(sourcePath),
        );
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            console.log('No such file or directory');
        }
    }
};

await decompress();