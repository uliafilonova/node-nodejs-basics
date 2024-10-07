
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'node:fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const targetPath = path.join(dirname(currentPath), 'files', 'fresh.txt');


const create = async () => {
    const content = 'I am fresh and young!';
    //Variation 1
        // fs.access(targetPath, fs.constants.F_OK).then(
        //     (done) => {
        //         throw Error('FS operation failed');
        //     },
        //     (error) => {
        //         fs.writeFile(targetPath, content);
        //     }
        // );


 //Variation 2
        try {
            await fsPromises.writeFile(targetPath, content, { flag: 'wx' });
        } catch (err) {
            throw Error('FS operation failed');
        }
    }
    await create();