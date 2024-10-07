import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import fs from 'node:fs';
import os from 'os';

const currentPath = fileURLToPath(import.meta.url);
const readPath = path.join(dirname(currentPath), 'files', 'fileToRead.txt');
const streamRead = fs.createReadStream(readPath);

const read = async () => {
    streamRead.on('data', (chunk) => console.log(chunk.toString() + os.EOL))
};

await read();


