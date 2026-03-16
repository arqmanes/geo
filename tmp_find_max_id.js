const fs = require('fs');
const content = fs.readFileSync('d:\\190910-ARQM-Template\\000-arqmanes.com-GEO\\Videos youtube.csv', 'utf8');
const lines = content.split('\n');
let maxId = 0;
for (const line of lines) {
    const match = line.match(/^(\d+),/);
    if (match) {
        const id = parseInt(match[1]);
        if (id > maxId) maxId = id;
    }
}
console.log('Max ID:', maxId);
