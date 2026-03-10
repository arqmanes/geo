const fs = require('fs');
const content = fs.readFileSync('Videos youtube.csv', 'utf8');
const lines = content.split('\n');

console.log('--- FIRST 5 LINES ---');
lines.slice(0, 5).forEach((l, i) => console.log(`${i + 1}: ${l}`));

console.log('--- LAST 5 LINES ---');
lines.slice(-5).forEach((l, i) => console.log(`${lines.length - 4 + i}: ${l}`));
