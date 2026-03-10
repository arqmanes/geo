const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const dir = 'd:\\190910-ARQM-Template\\000-arqmanes.com-GEO\\assets\\memoria';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

files.forEach(file => {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.jpg', '.webp'));

    try {
        console.log(`Converting ${file}...`);
        // Enhanced webp conversion: 800px width, 85 quality, subtle sharpening
        execSync(`ffmpeg -y -i "${inputPath}" -vf "scale=800:-1" -c:v libwebp -quality 85 -compression_level 6 "${outputPath}"`, { stdio: 'inherit' });

        // Remove original jpg if successful
        if (fs.existsSync(outputPath)) {
            fs.unlinkSync(inputPath);
            console.log(`Deleted ${file}`);
        }
    } catch (e) {
        console.error(`Failed to convert ${file}:`, e);
    }
});
console.log('Conversion complete.');
