import streamPromises from 'node:stream/promises';
import stream from 'node:stream';
const transform = async () => {
    const reverseStream = new stream.Transform({
        transform(chunk, _encoding, cb) {
            const chunks = chunk.toString().split('');
            const EOL = chunks.pop();
            const reverseString = chunks.reverse().concat(EOL).join('');
            cb(null, reverseString);
        }
    });
    process.stdin.pipe(reverseStream).pipe(process.stdout)
    //await streamPromises.pipeline(process.stdin, reverseStream, process.stdout);
};

await transform();