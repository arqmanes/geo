/**
 * Converts a PNG file to a minimal ICO file (single 32x32 image).
 * Pure Node.js, no dependencies.
 * An ICO file is: ICO header + directory entry + PNG data (Win Vista+ supports PNG inside ICO)
 */
const fs = require('fs');
const path = require('path');

const pngPath = path.join(__dirname, 'favicon.png');
const icoPath = path.join(__dirname, 'favicon.ico');

const pngData = fs.readFileSync(pngPath);

// ICO header: reserved(2) + type(2) + count(2) = 6 bytes
// Directory entry: width(1) + height(1) + colorCount(1) + reserved(1) + planes(2) + bitCount(2) + size(4) + offset(4) = 16 bytes
// Total header = 22 bytes

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);  // reserved
icoHeader.writeUInt16LE(1, 2);  // type: 1 = ICO
icoHeader.writeUInt16LE(1, 4);  // count: 1 image

const dirEntry = Buffer.alloc(16);
dirEntry.writeUInt8(0, 0);       // width: 0 = 256 (but we'll store PNG as-is, browser handles size)
dirEntry.writeUInt8(0, 1);       // height: 0 = 256
dirEntry.writeUInt8(0, 2);       // color count: 0 = no palette
dirEntry.writeUInt8(0, 3);       // reserved
dirEntry.writeUInt16LE(1, 4);   // planes
dirEntry.writeUInt16LE(32, 6);  // bit count
dirEntry.writeUInt32LE(pngData.length, 8);   // size of PNG data
dirEntry.writeUInt32LE(6 + 16, 12);          // offset = after header + dir entry

const icoData = Buffer.concat([icoHeader, dirEntry, pngData]);
fs.writeFileSync(icoPath, icoData);

console.log(`✅ favicon.ico generado: ${icoData.length} bytes`);
console.log(`   PNG embebido: ${pngData.length} bytes`);
