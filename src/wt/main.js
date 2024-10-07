import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { Worker } from 'worker_threads';
import os from 'os';

const currentPath = fileURLToPath(import.meta.url);
const workerPath = path.join(dirname(currentPath), 'worker.js');

const performCalculations = async () => {

    function worker(workerData) {
        return new Promise((resolve) => {
            const worker = new Worker(workerPath, { workerData });
            worker.on('message', (value) => resolve({ status: 'resolved', data: value }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        })
    } 

    const startOfValue = 10;
    const promises = [];

    for (let i = 0; i < os.cpus().length; i++) {
        promises.push(worker(i + startOfValue))
    }

    await Promise.all(promises).then(data => {
        console.log(data)
    })

};

await performCalculations();