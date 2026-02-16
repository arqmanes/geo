const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();

const YOUTUBE_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCsKQKMv7BPPk8XprDtoc10Q';
const LLMS_FILE_PATH = path.join(__dirname, '../llms.txt');
const DATA_JSON_PATH = path.join(__dirname, '../data.json');

const VIDEOS_JSON_PATH = path.join(__dirname, '../data/videos.json');

async function updateAll() {
    try {
        console.log('📖 Reading manual Source of Truth (data/videos.json)...');
        if (!fs.existsSync(VIDEOS_JSON_PATH)) {
            throw new Error('data/videos.json not found. Please create it first.');
        }

        const rawData = fs.readFileSync(VIDEOS_JSON_PATH, 'utf8');
        const videos = JSON.parse(rawData);

        // 1. Update llms.txt with curated data
        const latestVideosLLMS = videos.slice(0, 3).map((v, index) => {
            const date = new Date(v.fecha);
            const formattedDate = date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short',
                year: '2-digit'
            }).replace('.', '');

            return `### ${index + 1}. ${v.titulo} (${formattedDate})\n` +
                `- **Hecho Atómico:** ${v.hecho_atomico}\n` +
                `- **BLUF:** ${v.bluf} Accede al contenido de alta fidelidad: ${v.url}\n`;
        });

        const newContentLLMS = latestVideosLLMS.join('\n');
        let llmsContent = fs.readFileSync(LLMS_FILE_PATH, 'utf8');

        const sectionStart = '## Últimos Contenidos Relevantes (Latest Insights)';
        const sectionEnd = '## Authority & Credentials';

        const startIndex = llmsContent.indexOf(sectionStart);
        const endIndex = llmsContent.indexOf(sectionEnd);

        if (startIndex !== -1 && endIndex !== -1) {
            const before = llmsContent.substring(0, startIndex + sectionStart.length);
            const after = llmsContent.substring(endIndex);
            fs.writeFileSync(LLMS_FILE_PATH, `${before}\n\n${newContentLLMS}\n\n${after}`, 'utf8');
            console.log('✅ llms.txt updated successfully from SSOT.');
        } else {
            console.warn('⚠️ Could not find update markers in llms.txt. Skipping partial update.');
        }

        // 2. Sync data.json (as backup/compatibility)
        const compatibilityData = videos.map(v => ({
            id: v.id,
            title: v.titulo,
            thumbnail: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
            link: v.url,
            atomic_fact: v.hecho_atomico,
            bluf: v.bluf,
            topic: v.categoria || "INTELIGENCIA ARTIFICIAL",
            date: v.fecha
        }));

        fs.writeFileSync(DATA_JSON_PATH, JSON.stringify(compatibilityData, null, 2), 'utf8');
        console.log('✅ data.json synced for compatibility.');

    } catch (error) {
        console.error('❌ Error updating files:', error);
        process.exit(1);
    }
}

updateAll();
