
import { fileURLToPath } from "url";
import path, { dirname } from 'path';
import fs from 'node:fs';
import crypto from 'crypto';


const currentPath = fileURLToPath(import.meta.url);
const hashPath = path.join(dirname(currentPath), 'files', 'fileToCalculateHashFor.txt');


const calculateHash = async () => {
    const hash = crypto.createHash('sha256').setEncoding('hex');
    let fileHash = "";
    fs.createReadStream(hashPath)
        .pipe(hash)
        .on('finish', () => {
            fileHash = hash.read();
            console.log(fileHash)
        });
};

await calculateHash();