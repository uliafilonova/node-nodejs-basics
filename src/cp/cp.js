import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { fork } from 'child_process';
const currentPath = fileURLToPath(import.meta.url);
const childPath = path.join(dirname(currentPath), 'files', 'script.js');
const spawnChildProcess = async (args) => {  
    const child = fork(childPath, args, { silent: true });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

};

spawnChildProcess(['1', '2', '3', '4', '5']);