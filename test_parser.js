const fs = require('fs');

function parseCSV(text) {
    const records = [];
    let field = '';
    let inQuotes = false;
    let record = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const next = text[i + 1];

        if (char === '"') {
            if (inQuotes && next === '"') {
                field += '"';
                i++; // Skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            record.push(field.trim());
            field = '';
        } else if (char === '\n' && !inQuotes) {
            record.push(field.trim());
            if (record.length > 0) records.push(record);
            record = [];
            field = '';
        } else if (char === '\r' && !inQuotes) {
            // ignore
        } else {
            field += char;
        }
    }
    if (field || record.length > 0) {
        record.push(field.trim());
        records.push(record);
    }
    return records;
}

const content = fs.readFileSync('Videos youtube.csv', 'utf8');
const data = parseCSV(content);

console.log('Total records:', data.length);
console.log('First record ID:', data[0][0]);
console.log('Last record ID:', data[data.length - 1][0]);
console.log('Sample record (Last):', JSON.stringify(data[data.length - 1], null, 2));
