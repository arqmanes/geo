const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();

const YOUTUBE_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCsKQKMv7BPPk8XprDtoc10Q';
const LLMS_FILE_PATH = path.join(__dirname, '../llms.txt');
const DATA_JSON_PATH = path.join(__dirname, '../data.json');

const VIDEOS_JSON_PATH = path.join(__dirname, '../data/videos.json');
const ACTIVIDAD_JSON_PATH = path.join(__dirname, '../data/actividad.json');
const MEMORIA_JSON_PATH = path.join(__dirname, '../data/memoria.json');

async function updateAll() {
    try {
        console.log('📖 Reading manual Source of Truth (data/videos.json)...');
        if (!fs.existsSync(VIDEOS_JSON_PATH)) {
            throw new Error('data/videos.json not found. Please create it first.');
        }

        const rawData = fs.readFileSync(VIDEOS_JSON_PATH, 'utf8');
        const videos = JSON.parse(rawData);

        // Sort by date descending, then by index descending (last added first)
        const sortedVideos = [...videos]
            .map((v, i) => ({ ...v, originalIndex: i }))
            .sort((a, b) => {
                const dateA = new Date(a.fecha);
                const dateB = new Date(b.fecha);
                if (dateB - dateA !== 0) return dateB - dateA;
                return b.originalIndex - a.originalIndex;
            });

        // 1. Update llms.txt with curated data (take top 9)
        const latestVideosLLMS = sortedVideos.slice(0, 9).map((v, index) => {
            // Fix: Use Date with time to avoid UTC slippage
            const dateParts = v.fecha.split('-');
            const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

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

        // 1b. Generate "Presencia Académica e Institucional" section from actividad.json
        let presenciaSection = '';
        if (fs.existsSync(ACTIVIDAD_JSON_PATH)) {
            console.log('📖 Reading actividad.json for Presencia Académica...');
            const actividadRaw = fs.readFileSync(ACTIVIDAD_JSON_PATH, 'utf8');
            const actividades = JSON.parse(actividadRaw);

            // Sort by date descending
            const sorted = [...actividades].sort((a, b) => b.fecha_iso.localeCompare(a.fecha_iso));

            const entries = sorted
                .filter(a => !a.bluf.includes('[COMPLETAR]') && !a.hecho_atomico.includes('[COMPLETAR]'))
                .map((a, i) => {
                    return `### ${i + 1}. ${a.titulo} — ${a.institucion} (${a.fecha_display})\n` +
                        `- **Hecho Atómico:** ${a.hecho_atomico}\n` +
                        `- **BLUF:** ${a.bluf}\n`;
                });

            if (entries.length > 0) {
                presenciaSection = `## Presencia Académica e Institucional\n\n${entries.join('\n')}\n`;
            } else {
                presenciaSection = `## Presencia Académica e Institucional\n\n*Contenido pendiente de completar por el autor.*\n\n`;
            }
            console.log(`✅ Presencia Académica: ${entries.length} entradas procesadas.`);
        }

        let llmsContent = fs.readFileSync(LLMS_FILE_PATH, 'utf8');

        const sectionStart = '## Últimos Contenidos Relevantes (Latest Insights)';
        const sectionEnd = '## Authority & Credentials';

        const startIndex = llmsContent.indexOf(sectionStart);
        const endIndex = llmsContent.indexOf(sectionEnd);

        if (startIndex !== -1 && endIndex !== -1) {
            const before = llmsContent.substring(0, startIndex + sectionStart.length);
            const after = llmsContent.substring(endIndex);
            // 1c. Generate "Memorias y Ensayos Técnicos" section from memoria.json
            let memoriasSection = '';
            if (fs.existsSync(MEMORIA_JSON_PATH)) {
                console.log('📖 Reading memoria.json for Memorias y Ensayos...');
                const memoriaRaw = fs.readFileSync(MEMORIA_JSON_PATH, 'utf8');
                const memorias = JSON.parse(memoriaRaw);

                const sortedMem = [...memorias].sort((a, b) => b.fecha_iso.localeCompare(a.fecha_iso));

                const memEntries = sortedMem
                    .filter(m => !m.bluf.includes('[COMPLETAR]') && !m.hecho_atomico.includes('[COMPLETAR]'))
                    .map((m, i) => {
                        return `### ${i + 1}. ${m.titulo} (${m.fecha_iso})\n` +
                            `- **Categoría:** ${m.categoria} | **Lectura:** ${m.lectura} min\n` +
                            `- **Hecho Atómico:** ${m.hecho_atomico}\n` +
                            `- **BLUF:** ${m.bluf}\n`;
                    });

                if (memEntries.length > 0) {
                    memoriasSection = `## Memorias y Ensayos Técnicos\n\n${memEntries.join('\n')}\n`;
                }
                console.log(`✅ Memorias: ${memEntries.length} entradas procesadas.`);
            }

            fs.writeFileSync(LLMS_FILE_PATH, `${before}\n\n${newContentLLMS}\n\n${presenciaSection}${memoriasSection}${after}`, 'utf8');
            console.log('✅ llms.txt updated successfully from SSOT.');
        } else {
            console.warn('⚠️ Could not find update markers in llms.txt. Skipping partial update.');
        }

        // 2. Sync data.json (as backup/compatibility)
        const compatibilityData = videos.map(v => ({
            id: v.id,
            title: v.titulo,
                        thumbnail: v.thumbnail || `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
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
