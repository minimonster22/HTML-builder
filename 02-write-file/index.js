const fs = require('fs');
const readline = require('readline');

const filePath = '02-write-file/output.txt';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

console.log('Welcome! Enter text (type "exit" to terminate):');

rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        rl.close();
    } else {
        writeStream.write(input + '\n');
    }
});

rl.on('close', () => {
    console.log('Farewell!');
    process.exit();
});

process.on('SIGINT', () => {
    rl.close();
});