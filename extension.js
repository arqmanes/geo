
function renderFeaturedCards(data, container) {
    container.innerHTML = '';
    data.forEach(card => {
        const item = document.createElement('article');
        item.className = 'glass-card rounded-xl overflow-hidden group hover:border-neon-green/50 transition-all shadow-2xl flex flex-col h-full';
        item.setAttribute('data-geo-type', 'featured');

        item.innerHTML = `
            <div class="aspect-video bg-gray-900 relative">
                <img src="${card.thumbnail}" alt="${card.title}" class="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-700">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-12 h-12 bg-neon-green text-black rounded-full flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-[0_0_20px_rgba(57,255,20,0.6)]">
                         <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <div class="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white text-[10px] font-mono rounded backdrop-blur-sm border border-white/10">
                    ${card.duration}
                </div>
            </div>
            
            <div class="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <h3 class="text-base font-bold mb-3 text-gray-200 group-hover:text-neon-green transition-colors leading-tight">
                        ${card.title}
                    </h3>
                    
                    <div class="glass-card bg-neon-green/5 border-neon-green/10 p-3 rounded-lg mb-4 relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1 h-full bg-neon-green"></div>
                        <p class="text-xs text-gray-300 leading-snug pl-2">
                            <strong class="text-neon-green uppercase tracking-wide text-[10px] block mb-1">BLUF (Respuesta Directa):</strong>
                            <span class="italic text-gray-400">"${card.bluf || 'Información no disponible.'}"</span>
                        </p>
                    </div>

                    ${card.atomic_fact ? `
                    <div class="mb-4 pl-3 border-l border-neon-blue/30">
                        <p class="text-[10px] text-gray-500 leading-tight">
                            <strong class="text-neon-blue uppercase">Hecho Atómico:</strong>
                            <br>
                            ${card.atomic_fact}
                        </p>
                    </div>` : ''}
                </div>

                <div class="flex justify-between items-center text-[10px] uppercase font-bold text-gray-500 mt-2 border-t border-white/5 pt-3">
                    <span class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_5px_#00ffff]"></span>
                        ${card.category}
                    </span>
                    <a href="${card.link}" target="_blank" class="text-neon-green hover:text-white transition-colors flex items-center gap-1 group/link hover:underline decoration-neon-green/50 underline-offset-4">
                        Ver Ahora
                        <span class="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

function generateGeoSchema(data) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": data.map((item, index) => ({
            "@type": "HowTo",
            "position": index + 1,
            "name": item.title,
            "description": item.bluf || `Recurso GEO sobre ${getSoftwareFromTitle(item.title)}: ${item.title}`,
            "image": {
                "@type": "ImageObject",
                "url": item.thumbnail
            },
            "step": [
                {
                    "@type": "HowToStep",
                    "text": item.atomic_fact || "Ver video para detalles técnicos."
                }
            ],
            "video": {
                "@type": "VideoObject",
                "name": item.title,
                "description": `Recurso GEO sobre ${getSoftwareFromTitle(item.title)}: ${item.title}`,
                "thumbnailUrl": item.thumbnail,
                "uploadDate": new Date().toISOString(),
                "duration": "PT10M",
                "contentUrl": item.link
            }
        }))
    };

    let script = document.getElementById('schema-container');
    if (!script) {
        script = document.createElement('script');
        script.id = 'schema-container';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
    console.log('JSON-LD injected/updated for SEO via generateGeoSchema (Items: ' + data.length + ').');
}
