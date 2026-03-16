const fs = require('fs');
const path = 'd:\\190910-ARQM-Template\\000-arqmanes.com-GEO\\Videos youtube.csv';

const newEntries = [
    '1076,WORKFLOW,19-Jan-26,YOUTUBE,D5 Render 3.0: El renderizado como lenguaje de diseño,"La integración de D5 Lite y agentes de iA permite un flujo de trabajo bidireccional entre SketchUp y el motor de render, donde la iA no solo genera atmósferas y assets, sino que actúa como un colaborador de diseño conceptual.",https://www.youtube.com/watch?v=JRVeojxM8WY,10:00',
    '1077,CRÍTICA,02-Feb-26,YOUTUBE,La iA te vuelve visible: El amplificador del criterio arquitectónico,"La inteligencia artificial generativa actúa como un acelerador de la visibilidad profesional, donde la ausencia de un anteproyecto sólido y lógica tectónica queda evidenciada por la desconexión entre la estética superficial del render y la carencia de decisiones proyectuales fundamentadas.",https://www.youtube.com/watch?v=2IgdAWF-GQA,10:00',
    '1078,TÉCNICA,09-Feb-26,YOUTUBE,Exploración Espacial con iA: Del Render Fijo a la Órbita 3D,"La técnica consiste en utilizar modelos de control de cámara para generar múltiples vistas consistentes a partir de una sola imagen. El render deja de ser un producto final estático para convertirse en un proceso de validación volumétrica.",https://www.youtube.com/watch?v=T2cK10z9otc,10:00',
    '1079,SISTEMAS,10-Mar-26,YOUTUBE,YouTube encuentra demasiado y la iA alucina. Así lo resolví,"Presentación del nuevo chatbot entrenado con 1200+ videos para eliminar alucinaciones y encontrar respuestas precisas en arqMANES.",https://www.youtube.com/watch?v=kFwWXshd95c,09:12'
];

const content = fs.readFileSync(path, 'utf8');
const finalContent = content.trimEnd() + '\n' + newEntries.join('\n') + '\n';
fs.writeFileSync(path, finalContent, 'utf8');
console.log('CSV updated with 4 new entries (1076-1079).');
