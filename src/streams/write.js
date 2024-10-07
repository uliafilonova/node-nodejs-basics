import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import fs from 'node:fs';
import streamPromises from 'node:stream/promises';

const currentPath = fileURLToPath(import.meta.url);
const writePath = path.join(dirname(currentPath), 'files', 'fileToWrite.txt');


const streamWrite = fs.createWriteStream(writePath, { flags: 'a' });

const write = async () => {
    await streamPromises.pipeline(process.stdin, streamWrite);
};

await write();