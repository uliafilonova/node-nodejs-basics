import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import fs from 'node:fs';
import streamPromises from 'node:stream/promises';
import stream from 'node:stream';
import zlib from 'zlib';


const currentPath = fileURLToPath(import.meta.url);
const sourcePath = path.join(dirname(currentPath), "files", "fileToCompress.txt");
const destinationPath = path.join(dirname(currentPath), "files", "archive.gz");

const compress = async () => {
    // const gzip = zlib.createGzip();
    // const source = fs.createReadStream(sourcePath);
    // const destination = fs.createWriteStream(destinationPath);

    // stream.pipeline(source, gzip, destination, (error) => {
    //     if (error === 'ENOENT') {
    //         console.log('No such file or directory');
    //     }
    // });

    try {
        await streamPromises.pipeline(
            fs.createReadStream(sourcePath),
            zlib.createGzip(),
            fs.createWriteStream(destinationPath),
        );
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            console.log('No such file or directory');
        }
    }
};

await compress();