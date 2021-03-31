import fs from 'fs';

const stream = fs.createWriteStream('./data.txt', { flags: 'a' });

export function write(msg: string) {
    console.log(msg);
    stream.write(msg + '\n');
}