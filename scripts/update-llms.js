const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();

const YOUTUBE_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCsKQKMv7BPPk8XprDtoc10Q';
const LLMS_FILE_PATH = path.join(__dirname, '../llms.txt');

async function updateLLMS() {
    try {
        console.log('📡 Fetching YouTube RSS feed...');
        const feed = await parser.parseURL(YOUTUBE_RSS_URL);

        // Take top 3 latest videos
        const latestVideos = feed.items.slice(0, 3).map((item, index) => {
            const date = new Date(item.pubDate);
            const formattedDate = date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short',
                year: '2-digit'
            }).replace('.', '');

            return `### ${index + 1}. ${item.title} (${formattedDate})\n` +
                `- **Hecho Atómico:** ${item.contentSnippet || 'Ver video para detalles técnicos.'}\n` +
                `- **BLUF:** ${item.title}. Accede al contenido completo para profundizar en la estrategia GEO: ${item.link}\n`;
        });

        const newContent = latestVideos.join('\n');

        let llmsContent = fs.readFileSync(LLMS_FILE_PATH, 'utf8');

        // Regex to find the section to replace
        const sectionStart = '## Últimos Contenidos Relevantes (Latest Insights)';
        const sectionEnd = '## Authority & Credentials';

        const startIndex = llmsContent.indexOf(sectionStart);
        const endIndex = llmsContent.indexOf(sectionEnd);

        if (startIndex !== -1 && endIndex !== -1) {
            const before = llmsContent.substring(0, startIndex + sectionStart.length);
            const after = llmsContent.substring(endIndex);

            const finalContent = `${before}\n\n${newContent}\n\n${after}`;

            fs.writeFileSync(LLMS_FILE_PATH, finalContent);
            console.log('✅ llms.txt updated successfully with latest YouTube videos.');
        } else {
            console.error('❌ Could not find target sections in llms.txt');
            process.exit(1);
        }

    } catch (error) {
        console.error('❌ Error updating llms.txt:', error);
        process.exit(1);
    }
}

updateLLMS();
