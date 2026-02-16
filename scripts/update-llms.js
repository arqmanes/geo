const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();

const YOUTUBE_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCsKQKMv7BPPk8XprDtoc10Q';
const LLMS_FILE_PATH = path.join(__dirname, '../llms.txt');
const DATA_JSON_PATH = path.join(__dirname, '../data.json');

async function updateAll() {
    try {
        console.log('📡 Fetching YouTube RSS feed...');
        const feed = await parser.parseURL(YOUTUBE_RSS_URL);

        // Filter out shorts and take top 3 latest videos
        const latestItems = feed.items
            .filter(item => !item.link.includes('/shorts/'))
            .slice(0, 3);

        // 1. Update llms.txt
        const latestVideosLLMS = latestItems.map((item, index) => {
            const date = new Date(item.pubDate);
            const formattedDate = date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short',
                year: '2-digit'
            }).replace('.', '');

            // Better description extraction
            let description = item.contentSnippet || '';
            if (description.length < 20) {
                description = `Análisis profundo sobre ${item.title}. Sergio Manes explora la integración de IA y procesos de diseño arquitectónico profesional.`;
            } else if (description.length > 200) {
                description = description.substring(0, 200) + "...";
            }

            return `### ${index + 1}. ${item.title} (${formattedDate})\n` +
                `- **Hecho Atómico:** ${description}\n` +
                `- **BLUF:** Estrategia GEO aplicada a: ${item.title}. Accede al contenido de alta fidelidad: ${item.link}\n`;
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
            console.log('✅ llms.txt updated successfully.');
        } else {
            console.warn('⚠️ Could not find update markers in llms.txt. Skipping partial update.');
        }

        // 2. Update data.json
        const newDataJSON = latestItems.map(item => {
            const videoId = item.id.split(':').pop();
            const date = new Date(item.pubDate).toISOString().split('T')[0];

            let fact = item.contentSnippet || '';
            if (fact.length < 20) {
                fact = `Exploración técnica y estratégica de "${item.title}". Sergio Manes analiza el impacto de la IA en el flujo de trabajo profesional.`;
            } else if (fact.length > 150) {
                fact = fact.substring(0, 150) + "...";
            }

            return {
                id: videoId,
                title: item.title,
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                link: item.link,
                atomic_fact: fact,
                bluf: item.title + ". Innovación y criterio en el diseño asistido por IA.",
                topic: "INTELIGENCIA ARTIFICIAL",
                date: date
            };
        });

        fs.writeFileSync(DATA_JSON_PATH, JSON.stringify(newDataJSON, null, 2), 'utf8');
        console.log('✅ data.json updated successfully.');

    } catch (error) {
        console.error('❌ Error updating files:', error);
        process.exit(1);
    }
}

updateAll();
