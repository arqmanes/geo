// app.js
console.log('arqMANES iA system initialized.');

// Sample Data (Source of Truth Mock)
const geoData = [
    {
        "id": 1,
        "title": "Del render al mundo: la nueva era de la arquitectura con IA",
        "thumbnail": "https://img.youtube.com/vi/QI67G9USOn4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=QI67G9USOn4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 2,
        "title": "Entre la fascinación por la IA y el miedo a perder la esencia humana",
        "thumbnail": "https://img.youtube.com/vi/_wcqFNmDIS8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=_wcqFNmDIS8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 3,
        "title": "Seedream 4.0 review en arquitectura: ¿realmente funciona?",
        "thumbnail": "https://img.youtube.com/vi/Cu5ka6Y3WtE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Cu5ka6Y3WtE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 4,
        "title": "El mayor engaño con IA que vi en YouTube (Nano Banana)",
        "thumbnail": "https://img.youtube.com/vi/ADnrs4qGMEE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ADnrs4qGMEE&t=975s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 5,
        "title": "¿Arquitectura con superpoderes? Mira lo que hace ENSCAPE en 2025",
        "thumbnail": "https://img.youtube.com/vi/oWf9zcuIRs8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=oWf9zcuIRs8&t=282s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 6,
        "title": "D5 Render 2.11 explicado: la IA que está cambiando cómo renderizamos",
        "thumbnail": "https://img.youtube.com/vi/yfuhNNcesiY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=yfuhNNcesiY",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 7,
        "title": "Comparé las 6 mejores IA de arquitectura ¡Resultados sorprendentes!",
        "thumbnail": "https://img.youtube.com/vi/TX3uTduO7P8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=TX3uTduO7P8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 8,
        "title": "¡Mira cómo Revit obedece tus comandos hablados!",
        "thumbnail": "https://img.youtube.com/vi/nh3UMC870Ck/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=nh3UMC870Ck&t=51s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 9,
        "title": "El secreto para empezar un diseño desde cero | Como diseñar arquitectura con inteligencia artificial",
        "thumbnail": "https://img.youtube.com/vi/f9hw29CVB4I/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=f9hw29CVB4I",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 10,
        "title": "¡No gastes de más! Mi alternativa CAD por 10 veces menos - PROGECAD 2026",
        "thumbnail": "https://img.youtube.com/vi/cIHnA0P0ZfQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=cIHnA0P0ZfQ&t=6s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 11,
        "title": "💦Corte Fugado Arquitectura con Inteligencia Artificial Gratis en menos de 30 minutos TUTORIAL",
        "thumbnail": "https://img.youtube.com/vi/0FEpFOuP2EM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=0FEpFOuP2EM&list=TLPQMjkwNjIwMjVB-xBZapJO2Q&index=3",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 12,
        "title": "¡No Creerás lo Nuevo de V-Ray 7 para Revit en Renders de Visualización Arquitectónica Hiperrealista!",
        "thumbnail": "https://img.youtube.com/vi/DFObjb7yXdc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=DFObjb7yXdc&list=TLPQMjkwNjIwMjVB-xBZapJO2Q&index=2",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 13,
        "title": "REVIT FAMILIAS GRATUITAS. paramétricas para diseño de interiores. BLOCKS PLUGIN",
        "thumbnail": "https://img.youtube.com/vi/i26alXT3ulI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=i26alXT3ulI",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 14,
        "title": "¡El PELIGRO OCULTO de usar CAD Pirata que Nadie te Cuenta! ZWCAD 2026",
        "thumbnail": "https://img.youtube.com/vi/E2QO4h1PXU8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=E2QO4h1PXU8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 15,
        "title": "⛰️ ¡Este plugin hace TODO por vos! Topografía e Ingeniería Civil con tcpMDT25 de Aplitop",
        "thumbnail": "https://img.youtube.com/vi/AdvGPY83JDI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=AdvGPY83JDI",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 16,
        "title": "La IA que hace el mejor VIDEO ARQUITECTONICO y RECORRIDO VIRTUAL",
        "thumbnail": "https://img.youtube.com/vi/FWNieRJfLWs/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=FWNieRJfLWs",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 17,
        "title": "100% GRATIS!!! arquitectura paisajismo decoración e interiorismo | INTELIGENCIA ARTIFICIAL",
        "thumbnail": "https://img.youtube.com/vi/qVmg35OBHww/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=qVmg35OBHww",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 18,
        "title": "¡REVIT 2026 Trae Funciones INCREÍBLES que Cambiarán tu Trabajo! \"",
        "thumbnail": "https://img.youtube.com/vi/MOnx0eZyP4Q/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=MOnx0eZyP4Q",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 19,
        "title": "¿Cómo Crear Imágenes de Arquitectura con IA sin Pagar NADA?",
        "thumbnail": "https://img.youtube.com/vi/Os4jNKFmiXM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Os4jNKFmiXM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 20,
        "title": "AutoCAD 2026 - Todo lo que Necesitas Saber sobre la Nueva Versión!",
        "thumbnail": "https://img.youtube.com/vi/GXwfz9RrZic/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=GXwfz9RrZic",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 21,
        "title": "La Mejor IA para Diseño Arquitectónico en 2025",
        "thumbnail": "https://img.youtube.com/vi/lkr_1CzDTk0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=lkr_1CzDTk0&t=1s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 22,
        "title": "¡El Futuro del Rendering ha llegado! Velocidad BRUTAL | D5 RENDER 2.10 PATH TRACING en tiempo real",
        "thumbnail": "https://img.youtube.com/vi/bDUwxuSpvbA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=bDUwxuSpvbA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 23,
        "title": "¡Nueva IA GRATIS Rediseña tu Casa en Segundos!",
        "thumbnail": "https://img.youtube.com/vi/jlv0cLeh2PU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=jlv0cLeh2PU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 24,
        "title": "💙 Sketchup 2025 TUTORIAL | Fotorealismo Materiales PBR HDRI Inteligencia Artificial y mucho mas!!!",
        "thumbnail": "https://img.youtube.com/vi/zTTwxPe9LeA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=zTTwxPe9LeA&list=TLPQMDIwMzIwMjUTACpJHEVJRg&index=7",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 25,
        "title": "¿El Fin del Rendering Tradicional? Chaos Compra Evolve Lab",
        "thumbnail": "https://img.youtube.com/vi/OFRmLEW8Rok/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=OFRmLEW8Rok&list=TLPQMDIwMzIwMjUTACpJHEVJRg&index=6",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 26,
        "title": "🏆D5 RENDER, el 80% de los GRANDES de la ARQUITECTURA lo eligen!!! 🌟GRATIS LICENCIA PRO🌟",
        "thumbnail": "https://img.youtube.com/vi/Lf1TJX-1gDo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Lf1TJX-1gDo&t=83s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 27,
        "title": "La iA que está cambiando la forma de diseñar arquitectura: Architechtures Inteligencia Artificial",
        "thumbnail": "https://img.youtube.com/vi/CploaZ_kNro/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=CploaZ_kNro&t=19s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 28,
        "title": "Arquitectura y Diseño Redefinidos por la IA: Rol de la Inteligencia Artificial Midjourney ChatGPT",
        "thumbnail": "https://img.youtube.com/vi/uFPN_adbod4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=uFPN_adbod4&t=3s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 29,
        "title": "Inteligencia Artificial REVOLUCIONA tus DIBUJOS de ARQUITECTURA | PromeAi iA Gratis TUTORIAL",
        "thumbnail": "https://img.youtube.com/vi/3GnNXJYfMdk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=3GnNXJYfMdk&t=7s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 30,
        "title": "GRATIS y REVOLUCIONARIA! PromeAI, inteligencia artificial para ARQUITECTURA. Todos los secretos! IA",
        "thumbnail": "https://img.youtube.com/vi/M8ZXGH-rwxg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=M8ZXGH-rwxg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 31,
        "title": "La verdad incómoda ¿La inteligencia artificial está acabando con la arquitectura como la conocemos?",
        "thumbnail": "https://img.youtube.com/vi/J_FeD8Y8x5U/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=J_FeD8Y8x5U",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 32,
        "title": "INTELIGENCIA ARTIFICIAL para ARQUITECTURA en VIDEO | KLING vs LUMA vs RUNWAY imagen a video ai ia",
        "thumbnail": "https://img.youtube.com/vi/mBvOEDoUfNk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=mBvOEDoUfNk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 33,
        "title": "El As Bajo la Manga en Estructuras!!! | MOLA MODEL KIT | La herramienta que todos quieren tener!!!",
        "thumbnail": "https://img.youtube.com/vi/8If0sOv7r64/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=8If0sOv7r64",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 34,
        "title": "TUTORIAL 45 minutos | D5 RENDER Arquitectura exterior completo descarga gratis | español | manes",
        "thumbnail": "https://img.youtube.com/vi/kIfztrvey4E/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=kIfztrvey4E",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 35,
        "title": "Arquitectura en VIDEO➡️Runway iA | CREDITOS GRATIS Recorridos Virtuales Tutorial ai",
        "thumbnail": "https://img.youtube.com/vi/TTI-agVpL1M/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=TTI-agVpL1M",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 36,
        "title": "AutoCAD - INGENIERIA | tutorial ESPAÑOL Curso PRINCIPIANTES 2D desde CERO piezas mecanicas montea",
        "thumbnail": "https://img.youtube.com/vi/iiyvx6u-1b8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=iiyvx6u-1b8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 37,
        "title": "SOLUCION AUTOCAD! PROBLEMA al abrir o guardar archivo FILEDIA no abre o no guarda",
        "thumbnail": "https://img.youtube.com/vi/lB1N-5PhXDA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=lB1N-5PhXDA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 38,
        "title": "Diseño asistido por iA | LA INTELIGENCIA ARTIFICIAL en el PROYECTO de ARQUITECTURA | NUEVO DESAFIO!",
        "thumbnail": "https://img.youtube.com/vi/z3qPfeGZKcg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=z3qPfeGZKcg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 39,
        "title": "iA y Construcción | Podcast | Adrián Manavella | Rompecabezas inteligencia artificial arquitectura",
        "thumbnail": "https://img.youtube.com/vi/bQvYMv6f8uk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=bQvYMv6f8uk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 40,
        "title": "DISEÑO en BIM | SI o NO? | Revit Archicad Proyecto Podcast Fabián Calcagno Miller&Co | Rompecabezas",
        "thumbnail": "https://img.youtube.com/vi/psYFN8HOvuM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=psYFN8HOvuM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 41,
        "title": "MESSI en tu entrega de arquitectura!!!! | 3 bloques de LIONEL en AutoCAD para descargar",
        "thumbnail": "https://img.youtube.com/vi/MT_yYCKdxv0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=MT_yYCKdxv0",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 42,
        "title": "D5 render 2.8 GRANDES NOVEDADES | nueva versión | iA | gratis | scattering",
        "thumbnail": "https://img.youtube.com/vi/xTwQ0XYuyKE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=xTwQ0XYuyKE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 43,
        "title": "COTAPAREDES - arqMANES🌟 encuentro mano a mano, podcast, charla, arquitectos",
        "thumbnail": "https://img.youtube.com/vi/qNNlRP0idKY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=qNNlRP0idKY",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 44,
        "title": "Twinmotion 2024.1 | RENDER de ARQUITECTURA | Software GRATUITO | SIN RTX | Curso desde cero GRATIS",
        "thumbnail": "https://img.youtube.com/vi/tH1GYRMtF2k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=tH1GYRMtF2k",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 45,
        "title": "PROTOCOLO BIM bajo Norma ISO 19650 en Revit? | Podcast Fabián Calcagno Miller&Co | Rompecabezas",
        "thumbnail": "https://img.youtube.com/vi/t0vC755PGN8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=t0vC755PGN8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 46,
        "title": "iA y CREATIVIDAD | Podcast | Adrián Manavella | Rompecabezas inteligencia artificial arquitectura",
        "thumbnail": "https://img.youtube.com/vi/AsEFJ_8HPv8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=AsEFJ_8HPv8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 47,
        "title": "CAD vs BIM | Podcast | Fabián Calcagno MILLER&CO | Rompecabezas",
        "thumbnail": "https://img.youtube.com/vi/8pJCP4L16Pg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=8pJCP4L16Pg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 48,
        "title": "ZWCAD 2025, LEGAL y MEJOR que AutoCAD!!! No dejes de probarlo... Lo vas a querer!!!",
        "thumbnail": "https://img.youtube.com/vi/5yIm5pqRohc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=5yIm5pqRohc",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 49,
        "title": "Qué es el BIM? | Podcast | Fabián Calcagno MILLER&CO | Rompecabezas | Para que sirve?",
        "thumbnail": "https://img.youtube.com/vi/ZkyQ_bSqitk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ZkyQ_bSqitk&t=236s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 50,
        "title": "D5 RENDER 2.7 | TUTORIAL FULL GRATIS | SORTEO LICENCIAS PRO",
        "thumbnail": "https://img.youtube.com/vi/xwU2Bw1sDf4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=xwU2Bw1sDf4&t=1s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 51,
        "title": "D5 RENDER 2.7 viene con estas NOVEDADES!!!",
        "thumbnail": "https://img.youtube.com/vi/OVKu1_KOnuk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=OVKu1_KOnuk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 52,
        "title": "Como salir de la ILEGALIDAD? | El CAD mas económico y potente del mercado PROGECAD SORTEO LICENCIAS",
        "thumbnail": "https://img.youtube.com/vi/VSFbd9pleVo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=VSFbd9pleVo",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 53,
        "title": "Revit 2025 | NOVEDADES | Toposolid | plataforma para TOPOGRAFIA | Lo nuevo en español | Tutorial",
        "thumbnail": "https://img.youtube.com/vi/dZwhdNwMJxc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=dZwhdNwMJxc",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 54,
        "title": "Sketchup 2024 | Nuevo motor GRAFICO | OCLUSION AMBIENTAL | Ambient Occlusion Lo nuevo NOVEDADES",
        "thumbnail": "https://img.youtube.com/vi/fN4wZHUMV7Y/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=fN4wZHUMV7Y",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 55,
        "title": "Inteligencia Artificial en AutoCad 2025!? | Novedades | Todo lo nuevo | Ingles y Español | iA | Ai",
        "thumbnail": "https://img.youtube.com/vi/6vWoBMeoSFY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=6vWoBMeoSFY",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 56,
        "title": "🌉COLAPSO Puente de Baltimore USA | explico las causas del derrumbe | ESTRUCTURA COLAPSA | MOLA KIT",
        "thumbnail": "https://img.youtube.com/vi/9qpSc4OTAZQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=9qpSc4OTAZQ&t=908s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 57,
        "title": "🥇Lumion 2024 | Lider del mercado! | Novedades | Requisitos | Rendering de arquitectura tiempo real",
        "thumbnail": "https://img.youtube.com/vi/sP7jj5bkb-A/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=sP7jj5bkb-A&t=1780s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 58,
        "title": "🔴POR FIN!!! V RAY 2024 NOVEDADES!!! BLENDER, Enscape, Corona, Vantage, Ai, Chaos y Cosmos",
        "thumbnail": "https://img.youtube.com/vi/QuSt6fNano0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=QuSt6fNano0&t=7s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 59,
        "title": "🔴PERDERÁ el RENDERING la BATALLA contra la iA? D5 RENDER dió el GRAN PASO! Arquitectura ArchVIZ",
        "thumbnail": "https://img.youtube.com/vi/Ktcs8IBHG4E/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Ktcs8IBHG4E",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 60,
        "title": "💥REVIT 1000 veces mas rápido con Inteligencia Artificial | ia glyph copilot plugin",
        "thumbnail": "https://img.youtube.com/vi/7kofuWRRsaQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=7kofuWRRsaQ",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 61,
        "title": "MEJORA tus RENDERS en 1 CLICK con INTELIGENCIA ARTIFICIAL GRATIS, imagenes de arquitectura",
        "thumbnail": "https://img.youtube.com/vi/K6-1oG9CX4k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=K6-1oG9CX4k&t=1599s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 62,
        "title": "🔴GRATIS! SketchUp ahora hace RENDERS CON INTELIGENCIA ARTIFICIAL nativos! NUEVA EXTENSIÓN OFICIAL",
        "thumbnail": "https://img.youtube.com/vi/xwTVFf2SN-o/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=xwTVFf2SN-o&t=266s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 63,
        "title": "💥BESTIAL!!!!💥 Inteligencia Artificial INTERACTIVA para ARQUITECTURA | GRATIS | KREA AI | tutorial",
        "thumbnail": "https://img.youtube.com/vi/bRHm_chSJoM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=bRHm_chSJoM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 64,
        "title": "POR SI NO LO VISTE EN MI CANAL SECUNDARIO... | Chat GPT 4 + Dalle 3 Gratis",
        "thumbnail": "https://img.youtube.com/vi/XsSd1ITTQNo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=XsSd1ITTQNo",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 65,
        "title": "LA MEJOR iA para ARQUITECTURA??? | Dall e 3 o MIdjourney 5 Tutorial INTELIGENCIA ARTIFICIAL",
        "thumbnail": "https://img.youtube.com/vi/kAhfFb0t4Bk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=kAhfFb0t4Bk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 66,
        "title": "CÓMO HACERLO?  | proceso de diseño arquitectura | chatgpt midjourney ia ai render",
        "thumbnail": "https://img.youtube.com/vi/O-iiNj-cGQ4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=O-iiNj-cGQ4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 67,
        "title": "La iA arrasa con todo lo que encuentra a su paso! INTELIGENCIA ARTIFICIAL en RENDER ARQUITECTURA",
        "thumbnail": "https://img.youtube.com/vi/IfCKnHr3n00/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=IfCKnHr3n00&t=2s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 68,
        "title": "Hay una alternativa legal, económica, mejor, mas rápida y con licencia perpetua | AutoCAD o ZWCAD?",
        "thumbnail": "https://img.youtube.com/vi/PozglBZLiKw/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=PozglBZLiKw&t=1s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 69,
        "title": "D5 LO CAMBIA TODO!!! | iA D5HI+D5RENDER 2.5+D5 TEAMS SoluciOn integral para diseño arquitectónico",
        "thumbnail": "https://img.youtube.com/vi/LAAnhQEOwI4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=LAAnhQEOwI4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 70,
        "title": "LE CORBUSIER | Entrevista EXCLUSIVA en ESPAÑOL | 2023 iAs | ChatGPT4 | elevenlabs | ARQUITECTURA",
        "thumbnail": "https://img.youtube.com/vi/zkzG_AKp_Io/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=zkzG_AKp_Io&t=1s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 71,
        "title": "EL MEJOR SOFTWARE de RENDERING de arquitectura en TIEMPO REAL Tutorial Descargar GRATIS D5 RENDER",
        "thumbnail": "https://img.youtube.com/vi/l4Ly3dsap-s/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=l4Ly3dsap-s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 72,
        "title": "Plantas de ARQUITECTURA en SEGUNDOS con inteligencia artificial | Architechtures Finch 3D PlanFinder",
        "thumbnail": "https://img.youtube.com/vi/qBmRyFbkJUk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=qBmRyFbkJUk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 73,
        "title": "Generador de iDEAS de arquitectura | inteligencia artificial ChatGPT Midjourney v5 Prompts iA Ai",
        "thumbnail": "https://img.youtube.com/vi/Ph5fR7C4EpM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Ph5fR7C4EpM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 74,
        "title": "AutoCAD 2024 | machine learning | TODO lo NUEVO | TOP 5 Novedades",
        "thumbnail": "https://img.youtube.com/vi/cEhVT43k_us/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=cEhVT43k_us",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 75,
        "title": "Lumion 2023 | Lo mejor y lo peor!!! 🤫 NADIE TE DICE ESTO Ray Trace GPU 23 | Novedades Tutorial",
        "thumbnail": "https://img.youtube.com/vi/I2UqtUF872k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=I2UqtUF872k",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 76,
        "title": "JOIN | UNIR | #7 Comandos no muy difundidos de AutoCAD | como lineas, polilineas, arcos, curvas",
        "thumbnail": "https://img.youtube.com/vi/nXxhPuih6K8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=nXxhPuih6K8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 77,
        "title": "PEDIT | EDITPOL | #6 Comandos no muy difundidos de AutoCAD",
        "thumbnail": "https://img.youtube.com/vi/qvAlRQ9ksns/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=qvAlRQ9ksns",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 78,
        "title": "PLANTILLAS DE VISTA | REVIT | #31 | curso para principantes",
        "thumbnail": "https://img.youtube.com/vi/9Al2s4gVWp4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=9Al2s4gVWp4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 79,
        "title": "ESQUEMAS DE COLOR | REVIT | #30 | curso para principantes",
        "thumbnail": "https://img.youtube.com/vi/doZxChC5riQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=doZxChC5riQ",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 80,
        "title": "HABITACIONES | REVIT | #29 | curso para principantes",
        "thumbnail": "https://img.youtube.com/vi/2YXL5rTs61U/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=2YXL5rTs61U",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 81,
        "title": "PLANOS ARQUITECTÓNICOS | REVIT | #28 | curso para principantes",
        "thumbnail": "https://img.youtube.com/vi/6K5PERAOf1g/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=6K5PERAOf1g",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 82,
        "title": "PDFSHXTEXT | #4 Comandos no muy difundidos de AutoCAD",
        "thumbnail": "https://img.youtube.com/vi/XLyHVUR-f9s/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=XLyHVUR-f9s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 83,
        "title": "💎 VAS A QUERER ESTE SOFTWARE...💎   D5 render 2.4 | NUEVA VERSIÓN | tutorial descargar gratis",
        "thumbnail": "https://img.youtube.com/vi/kF6DmQP3ypM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=kF6DmQP3ypM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 84,
        "title": "⚡ MULTIPLES PINZAMIENTOS | #3 Comandos no muy difundidos de AutoCAD",
        "thumbnail": "https://img.youtube.com/vi/2r7V13BWmo0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=2r7V13BWmo0",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 85,
        "title": "🏙️ MURO CORTINA - REVIT | REJILLAS Y PANELES",
        "thumbnail": "https://img.youtube.com/vi/Prpx92xtB7Q/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Prpx92xtB7Q",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 86,
        "title": "🏙️ MURO CORTINA - REVIT | PERFILES Y MONTANTES",
        "thumbnail": "https://img.youtube.com/vi/0r1laz_fOJs/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=0r1laz_fOJs",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 87,
        "title": "🏙️ MURO CORTINA - REVIT | INTRODUCCIÓN | TUTORIAL",
        "thumbnail": "https://img.youtube.com/vi/n_MbNpZvR84/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=n_MbNpZvR84",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 88,
        "title": "⚡BURST | Videos de Patreon gratuitos | como descomponer o explotar bloques con atributos",
        "thumbnail": "https://img.youtube.com/vi/dRwi-JnGodg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=dRwi-JnGodg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 89,
        "title": "Un NUEVO TIPO de RENDER | Inteligencia artificial en Arquitectura | Concepto | Idea | Veras Ia",
        "thumbnail": "https://img.youtube.com/vi/jMDsuYvMDZA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=jMDsuYvMDZA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 90,
        "title": "De CROQUIS a RENDER en un click! iA Midjourney Stable Diffusion Veras Diseño Arquitectura Proyecto",
        "thumbnail": "https://img.youtube.com/vi/3FVhKOEZk_k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=3FVhKOEZk_k",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 91,
        "title": "BLOCKREPLACE | #1 Comandos no muy difundidos de AutoCAD | Como reemplazar sustituir bloque otro",
        "thumbnail": "https://img.youtube.com/vi/anjNTmzp_3k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=anjNTmzp_3k&t=305s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 92,
        "title": "I.A. nueva versión | ARQUITECTURA 3D GRATIS x 15 días/30 renders | IA | | EVOLVELAB | VERAS REVIT",
        "thumbnail": "https://img.youtube.com/vi/QdR-8-tIqeQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=QdR-8-tIqeQ&t=25s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 93,
        "title": "PERFILES | REVIT | Familias y Tipos de perfil | Profiles | | tutorial basico y rápido 2X",
        "thumbnail": "https://img.youtube.com/vi/arlXcYsABjw/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=arlXcYsABjw",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 94,
        "title": "Cómo abrir 2 Sketchup a la vez❓ ❓ ❓ -- El mejor FLUJO DE TRABAJO para proyectos grandes en 3D.",
        "thumbnail": "https://img.youtube.com/vi/ipkA3T6ePzQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ipkA3T6ePzQ",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 95,
        "title": "PERFILES| Profiles | como crear y editar un perfil de cualquier tipo | tutorial basico",
        "thumbnail": "https://img.youtube.com/vi/f6lGAI-ggL8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=f6lGAI-ggL8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 96,
        "title": "INTELIGENCIA ARTIFICIAL | ARQUITECTURA 3D GRATIS x 15 días/100 renders | IA | ya veras | EVOLVELAB",
        "thumbnail": "https://img.youtube.com/vi/dL42W_ZLtVk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=dL42W_ZLtVk&t=282s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 97,
        "title": "Tu archivo es MUY PESADO? | Tamaño en Sketchup | como purgar modelo | reducir peso | liviano",
        "thumbnail": "https://img.youtube.com/vi/4arm_8Jdc40/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=4arm_8Jdc40&t=9s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 98,
        "title": "CUBIERTA por EXTRUSIÓN |  cubierta inclinada | complejas | personalizadas",
        "thumbnail": "https://img.youtube.com/vi/ghKFVw2Y2RA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ghKFVw2Y2RA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 99,
        "title": "Enumerar Textos Correlativos en AutoCAD | SIN PLUGINS!!! TCOUNT",
        "thumbnail": "https://img.youtube.com/vi/eEVR2c5W7TU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=eEVR2c5W7TU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 100,
        "title": "PENDIENTE / desague / pendiente / suelo / patio",
        "thumbnail": "https://img.youtube.com/vi/CY2pDt6vbr0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=CY2pDt6vbr0",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 101,
        "title": "SUELOS Y PLATAFORMAS, como editar plataforma de construcción, como crear suelos",
        "thumbnail": "https://img.youtube.com/vi/yqRC6P1aEoc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=yqRC6P1aEoc",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 102,
        "title": "PIEZAS Y UNIONES | union muro columna desde cero",
        "thumbnail": "https://img.youtube.com/vi/u4EzRUip0IU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=u4EzRUip0IU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 103,
        "title": "COTAS  como configurar, acotar, dimension, automaticas. familia",
        "thumbnail": "https://img.youtube.com/vi/MneZB6cvHMY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=MneZB6cvHMY&t=572s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 104,
        "title": "Cómo traducir viejas Capas a mi nueva Plantilla? (2 métodos dentro de AutoCAD) | Layers",
        "thumbnail": "https://img.youtube.com/vi/nEb5nHgy_ZA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=nEb5nHgy_ZA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 105,
        "title": "D5RENDER 💥PRO💥GRATIS💥PARA ESTUDIANTES Y PROFESORES💥LICENCIA EDUCATIVA FULL💥D5EDU💥",
        "thumbnail": "https://img.youtube.com/vi/ZVK6magk7qE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ZVK6magk7qE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 106,
        "title": "⛰️TOPOGRAFIA⛰️ | Curso de REVIT | Plataforma de ConstrucciOn | Building Pad | ExcavaciOn",
        "thumbnail": "https://img.youtube.com/vi/XzXl0F5r-hE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=XzXl0F5r-hE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 107,
        "title": "SISTEMA DE VIGAS📶 | Curso de REVIT | PERGOLAS TECHOS DE LAMINA VIGUETAS PERFILES | 2da parte",
        "thumbnail": "https://img.youtube.com/vi/LwrlUMIpDCU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=LwrlUMIpDCU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 108,
        "title": "CREA TU PROPIO RELLENO!!! Creación de SOMBREADO HATCH ACHURADOS AutoCAD",
        "thumbnail": "https://img.youtube.com/vi/PheJMBwPLSk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=PheJMBwPLSk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 109,
        "title": "SISTEMA DE VIGAS⚠️ | Curso de REVIT | losas bovedilla viguetas estructura | primera parte",
        "thumbnail": "https://img.youtube.com/vi/po6ix7B-NKY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=po6ix7B-NKY&t=74s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 110,
        "title": "AutoCAD Puntos de referencia | point divide measure gradua | dividir partes iguales",
        "thumbnail": "https://img.youtube.com/vi/FY6LvFlnwrM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=FY6LvFlnwrM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 111,
        "title": "RECORTE DE VIGAS Y COLUMNAS DE ACERO🌐Curso de REVIT | cercha cabriada estructura metalica perfil",
        "thumbnail": "https://img.youtube.com/vi/x13pVOwx9tM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=x13pVOwx9tM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 112,
        "title": "VIGAS DE CELOSIA / Curso de REVIT | cercha cabriada estructura metalica perfil steel frame",
        "thumbnail": "https://img.youtube.com/vi/Ym87j9STO7s/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Ym87j9STO7s&t=238s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 113,
        "title": "V-Ray 6 SketchUp | TUTORIAL | lo nuevo de Vray para Sketch Up | Novedades 2022 | vray6 ENMESH",
        "thumbnail": "https://img.youtube.com/vi/atpFdwRa7vg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=atpFdwRa7vg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 114,
        "title": "Bloque UTM a UCS | Coordenadas | TOPOGRAFIA | AGRIMENSURA | INGENIERIA CIVIL | AUTOCAD",
        "thumbnail": "https://img.youtube.com/vi/VOENT3NbYUE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=VOENT3NbYUE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 115,
        "title": "AUTOCAD | UCS SCP | cambiar y rotar coordenadas | TUTORIAL COMPLETO explicado español",
        "thumbnail": "https://img.youtube.com/vi/vFF7ZGm_ZyM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=vFF7ZGm_ZyM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 116,
        "title": "AutoCAD | Coordenadas Relativas, Polares y varias cositas mas... | CURSO COMPLETO",
        "thumbnail": "https://img.youtube.com/vi/o4T2FhnSPLc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=o4T2FhnSPLc",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 117,
        "title": "Como modificar las unidades de tu plantilla correctamente | AutoCAD | Unidades",
        "thumbnail": "https://img.youtube.com/vi/cvhJXvt-rtc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=cvhJXvt-rtc",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 118,
        "title": "Puerta doble hoja | Bloque dinAmico | autocad | gratis",
        "thumbnail": "https://img.youtube.com/vi/17_-VwlKkA4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=17_-VwlKkA4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 119,
        "title": "Revit vs Archicad | 10 razones para optar por el software BIM que sea mejor para vos",
        "thumbnail": "https://img.youtube.com/vi/EcRSMWEyaS4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=EcRSMWEyaS4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 120,
        "title": "🌟El GIGANTE del RENDERING sigue CRECIENDO🌟 D5 render 2.3 GRATIS | ARQUITECTURA | NOVEDADES!!!",
        "thumbnail": "https://img.youtube.com/vi/5lNrQWOApbU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=5lNrQWOApbU&t=57s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 121,
        "title": "LTS | TIPOS DE LINEA | AUTOCAD | lineas punteadas | plantilla arquitectura",
        "thumbnail": "https://img.youtube.com/vi/2v6AvnJ9r7k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=2v6AvnJ9r7k",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 122,
        "title": "Plantilla para Espacio Papel | paper space presentaciOn crear rotulo cajetin",
        "thumbnail": "https://img.youtube.com/vi/0JLLodPlsMA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=0JLLodPlsMA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 123,
        "title": "🎨MATERIALES🎨Curso de REVIT | apariencia planos hatch achurado crear sombreado tutorial biblioteca",
        "thumbnail": "https://img.youtube.com/vi/RKE9KUKeO40/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=RKE9KUKeO40",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 124,
        "title": "MUROS COMPUESTOS🧱REVIT TUTORIAL🧱Curso de REVIT | capas envolventes de ladrillo interior exterior",
        "thumbnail": "https://img.youtube.com/vi/NUaJJ3gBgSg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=NUaJJ3gBgSg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 125,
        "title": "TIPS | Bloque anotativo con atributos | Cota de Nivel en Planta",
        "thumbnail": "https://img.youtube.com/vi/OD7I9L5Cu9k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=OD7I9L5Cu9k",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 126,
        "title": "FAMILIA 3D PARAMETRICA  REVIT TUTORIAL  BASE AISLADA CENTRADA | gratis para descargar",
        "thumbnail": "https://img.youtube.com/vi/4MuHDaihRaE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=4MuHDaihRaE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 127,
        "title": "FUNDACIONES CIMENTACIONES ZAPATAS REVIT TUTORIAL | AISLADA CORRIDA PLATEA CIMIENTOS curso",
        "thumbnail": "https://img.youtube.com/vi/eubX53o4Y1Q/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=eubX53o4Y1Q",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 128,
        "title": "Aislante TERMICO | BLOQUES DINAMICOS | Autocad | GRATIS | (aislacion para paredes)",
        "thumbnail": "https://img.youtube.com/vi/8RdVPJBkPiM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=8RdVPJBkPiM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 129,
        "title": "VIGAS➖ REVIT TUTORIAL | estructura | METALICAS HORMIGON INCLINADAS columnas rejillas y grillas",
        "thumbnail": "https://img.youtube.com/vi/lWozvAr9kds/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=lWozvAr9kds",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 130,
        "title": "Bloques Atributos y Tablas | ExtracciOn de datos | Planta de Electricidad Autocad",
        "thumbnail": "https://img.youtube.com/vi/SYzmPF0yDQw/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=SYzmPF0yDQw",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 131,
        "title": "COLUMNAS Pilares Castillos | REVIT TUTORIAL | estructura | arquitectonicas CIRCULARES hormigon",
        "thumbnail": "https://img.youtube.com/vi/WXr_In6QR40/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=WXr_In6QR40",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 132,
        "title": "Tejas Coloniales | Bloque dinamico | AutoCAD avanzado",
        "thumbnail": "https://img.youtube.com/vi/Fu_Ei7UR4sQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Fu_Ei7UR4sQ",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 133,
        "title": "DESCARGAR FAMILIAS REVIT | Componentes | LIBRERIAS cargar 2018 2019 2020 2021 2022 2023 curso",
        "thumbnail": "https://img.youtube.com/vi/Ww1DqkyXwmU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Ww1DqkyXwmU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 134,
        "title": "Comando SECRETO | Create Crear Similar Add Selected",
        "thumbnail": "https://img.youtube.com/vi/hZBQBDpaXA4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=hZBQBDpaXA4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 135,
        "title": "REJILLAS GRILLAS EJES | REVIT TUTORIAL ingles y español nivel PRINCIPIANTES | ARQUITECTURA 2021",
        "thumbnail": "https://img.youtube.com/vi/zzFIiiK_Vv0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=zzFIiiK_Vv0",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 136,
        "title": "ROTULO | CAJETIN | Pie de plano | MEMBRETE | VIÑETA",
        "thumbnail": "https://img.youtube.com/vi/2sDB0rEXuKQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=2sDB0rEXuKQ",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 137,
        "title": "Un Nuevo GIGANTE del RENDERING  D5 render 2.2 GRATIS | Recorridos virtuales | ARQUITECTURA",
        "thumbnail": "https://img.youtube.com/vi/TmSzMIafLKg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=TmSzMIafLKg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 138,
        "title": "*ENSCAPE 3.3* | TODAS LAS NOVEDADES tutorial sketchup revit | render exterior e interior | NUEVO",
        "thumbnail": "https://img.youtube.com/vi/4d9f5JWTx-k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=4d9f5JWTx-k",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 139,
        "title": "CUBIERTAS PLANAS | REVIT TUTORIAL ingles y español nivel PRINCIPIANTES | BIM | ARQUITECTURA 2021",
        "thumbnail": "https://img.youtube.com/vi/0O-Nx0v1jl0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=0O-Nx0v1jl0",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 140,
        "title": "WOW! Vray 5.2 para REVIT | Tutorial | NOVEDADES | RENDER de Arquitectura | rendering 5",
        "thumbnail": "https://img.youtube.com/vi/yH1euAVwrkM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=yH1euAVwrkM",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 141,
        "title": "NIVELES y SUELOS| REVIT TUTORIAL ingles y español nivel PRINCIPIANTES | BIM | ARQUITECTURA 2021",
        "thumbnail": "https://img.youtube.com/vi/YdL3Cps9YSU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=YdL3Cps9YSU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 142,
        "title": "AutoCAD 2023 | Vale la pena? | Novedades a full | Todo lo nuevo",
        "thumbnail": "https://img.youtube.com/vi/zlpRgYCGk2E/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=zlpRgYCGk2E",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 143,
        "title": "PATREON | TABLAS en AUTOCAD | Formato",
        "thumbnail": "https://img.youtube.com/vi/grkTbajuRgg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=grkTbajuRgg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 144,
        "title": "PUERTAS VENTANAS | REVIT para PRINCIPIANTES | TUTORIAL ingles y español | BIM | ARQUITECTURA 2021",
        "thumbnail": "https://img.youtube.com/vi/zXaDyGoecGo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=zXaDyGoecGo",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 145,
        "title": "TUTORIAL Render interior REALISTA D5 GRATIS materiales PBR iluminacion interiorismo y arquitectura",
        "thumbnail": "https://img.youtube.com/vi/DIy3MNIxM8g/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=DIy3MNIxM8g",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 146,
        "title": "PATREON | Cota de Nivel TODO TERRENO | AUTOCAD | Bloque dinAmico multipropósito",
        "thumbnail": "https://img.youtube.com/vi/fYAQvkgvd3Y/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=fYAQvkgvd3Y",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 147,
        "title": "MUROS | REVIT para PRINCIPIANTES | TUTORIAL | ingles y español | BIM | ARQUITECTURA | 2022 2021",
        "thumbnail": "https://img.youtube.com/vi/wptE4g5vMeY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=wptE4g5vMeY",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 148,
        "title": "REVIT | CURSO GRATUITO | ingles y español | para PRINCIPIANTES | TUTORIAL | BIM | ARQUITECTURA",
        "thumbnail": "https://img.youtube.com/vi/RVguPWUIROA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=RVguPWUIROA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 149,
        "title": "💎 UNREAL ENGINE 5 💎 para principiantes | UE5 preview 2 | ARCHVIZ | TUTORIAL render Arquitectura",
        "thumbnail": "https://img.youtube.com/vi/fFuc6VaFqvE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=fFuc6VaFqvE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 150,
        "title": "⚡PATREON | BASE de HORMIGON | Bloque DINAMICO AUTOCAD | centrada esquina medianera",
        "thumbnail": "https://img.youtube.com/vi/vOy6XtdbD6o/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=vOy6XtdbD6o&t=20s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 151,
        "title": "RENDER Tutorial MUY FACIL | D5 render 2.1 renderizar ARQUITECTURA exterior dia y noche RAYTRACING",
        "thumbnail": "https://img.youtube.com/vi/MFkI6e8vbts/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=MFkI6e8vbts",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 152,
        "title": "⚡PATREON | Bloque DinAmico | ARRAY en 2 ejes | Ladrillo de vidrio | AutoCAD",
        "thumbnail": "https://img.youtube.com/vi/XFx9KrDM5UU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=XFx9KrDM5UU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 153,
        "title": "Untitled Video",
        "thumbnail": "https://img.youtube.com/vi/efldBPBYXG8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=efldBPBYXG8&t=904s\"",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 154,
        "title": "⚡PATREON | AutoCAD | Bloque DINAMICO de COTA DE NIVEL AUTOMATICA | TUTORIAL PASO A PASO",
        "thumbnail": "https://img.youtube.com/vi/CBKEaUY_nlA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=CBKEaUY_nlA",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 155,
        "title": "Nuevo Sketchup 2022 | Todo lo nuevo | Tutorial | Novedades | Full | Pro | Español",
        "thumbnail": "https://img.youtube.com/vi/MvjjGVHvZnY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=MvjjGVHvZnY",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 156,
        "title": "Bloque DINAMICO ANOTATIVO CON ATRIBUTOS | SIMBOLO DE CORTE TUTORIAL PASO A PASO",
        "thumbnail": "https://img.youtube.com/vi/5WXeEmYC4-4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=5WXeEmYC4-4&t=516s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 157,
        "title": "EMPEZAMOS CON TODO!!!! - Novedades 2022",
        "thumbnail": "https://img.youtube.com/vi/C5MQDLbddus/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=C5MQDLbddus",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 158,
        "title": "Calidad y Rapidez en tus Renders | Enscape 3.2 Novedades | Tutorial de lo nuevo a full Sketchup",
        "thumbnail": "https://img.youtube.com/vi/T1gVKs3Dr1Q/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=T1gVKs3Dr1Q&t=1866s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 159,
        "title": "Vray 5.2 para SketchUp | Te enseño a usar todo lo nuevo | Scatter Decals y mas novedades 🌩️",
        "thumbnail": "https://img.youtube.com/vi/iBZoElXUWvc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=iBZoElXUWvc&t=1547s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 160,
        "title": "NUEVO Twinmotion 2022.1 | Mirá lo que te estas perdiendo | Todas las novedades!!!",
        "thumbnail": "https://img.youtube.com/vi/UsToMMdxpCI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=UsToMMdxpCI",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 161,
        "title": "💲💲GRATIS💲💲 D5 Render 2.0 NUEVA VERSION software renderizado | REVIT SKETCHUP BLENDER 3D MAX ARCHICAD",
        "thumbnail": "https://img.youtube.com/vi/hVhs0CQ7rmU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=hVhs0CQ7rmU&list=TLPQMDExMTIwMjGmbASjh1NYEQ&index=3",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 162,
        "title": "NECESITAS SABER esto para NO FRUSTRARTE al diseñar | proceso de diseño arquitectonico",
        "thumbnail": "https://img.youtube.com/vi/FkhuVt_vudE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=FkhuVt_vudE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 163,
        "title": "IMPRIMIR en Autocad NIVEL DIOS | a escala PDF PRESENTACION LAYOUT blanco y negro COLOR plumillas",
        "thumbnail": "https://img.youtube.com/vi/pwI6zR-BsUk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=pwI6zR-BsUk&t=33s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 164,
        "title": "AutoCAD 3D para PRINCIPIANTES | tutorial ESPAÑOL Curso ARQUITECTURA desde CERO a partir de 2D",
        "thumbnail": "https://img.youtube.com/vi/oly3gCpgQag/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=oly3gCpgQag",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 165,
        "title": "TERRENO 3D en SketchUp | modelar rutas senderos caminos curvas de nivel topografia 2019 2020 2021",
        "thumbnail": "https://img.youtube.com/vi/nlMrmImZkow/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=nlMrmImZkow",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 166,
        "title": "EFICIENCIA ESTRUCTURAL | AHORRA hasta 75% en tus VIGAS sin perder capacidad de carga ni SEGURIDAD",
        "thumbnail": "https://img.youtube.com/vi/nM9sfjS8pyk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=nM9sfjS8pyk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 167,
        "title": "Los ARQUITECTOS NO saben NADA de ESTRUCTURAS!!!! | Mi Descargo",
        "thumbnail": "https://img.youtube.com/vi/yoPDu_UsqZ0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=yoPDu_UsqZ0",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 168,
        "title": "ESTA es la CAUSA del DERRUMBE del edificio de MIAMI | NUEVOS DATOS del COLAPSO y CAIDA Collins Av",
        "thumbnail": "https://img.youtube.com/vi/c-1wwF_STiY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=c-1wwF_STiY",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 169,
        "title": "CUAL fue la CAUSA del DERRUMBE del edificio de MIAMI | Profesor explica momento del COLAPSO y CAIDA",
        "thumbnail": "https://img.youtube.com/vi/jGUEwj-Pi54/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=jGUEwj-Pi54&t=9s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 170,
        "title": "PORTAFOLIO ARQUITECTURA (como crear armar virtual web) hacer en BEHANCE o ISSUU ideal estudiante",
        "thumbnail": "https://img.youtube.com/vi/789Zd9aHyLs/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=789Zd9aHyLs&t=246s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 171,
        "title": "DETALLE CONSTRUCTIVO LOSA (hormigon alivianada casetonada nervada steel deck losacero viguetas etc)",
        "thumbnail": "https://img.youtube.com/vi/LpAfbepckbI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=LpAfbepckbI",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 172,
        "title": "Detalles constructivos  Muros y Tabiques | AutoCAD Sketchup",
        "thumbnail": "https://img.youtube.com/vi/wnChMo9H8Rk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=wnChMo9H8Rk",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 173,
        "title": "Mi AutoCAD imprime MAL!!!",
        "thumbnail": "https://img.youtube.com/vi/-xseUFBvk1M/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=-xseUFBvk1M",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 174,
        "title": "Como UNIR varios PDF en UN solo ARCHIVO con o sin programas",
        "thumbnail": "https://img.youtube.com/vi/ZcPy5dFlwgo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ZcPy5dFlwgo",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 175,
        "title": "Como REDUCIR tamaño de un PDF sin perder CALIDAD en linea vectorial (Autocad illustrator Indesign)",
        "thumbnail": "https://img.youtube.com/vi/q-lirWnTnL8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=q-lirWnTnL8",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 176,
        "title": "QUE hay que dibujar en un corte ARQUITECTONICO??? | Como hacer SECCIONES arquitectonicas??? TIPOS",
        "thumbnail": "https://img.youtube.com/vi/S-toDnUGZTw/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=S-toDnUGZTw",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 177,
        "title": "Como trabajar si el SketchUp se TRABA mucho, está LENTO, o es muy PESADO? Flujo de trabajo PC LENTA",
        "thumbnail": "https://img.youtube.com/vi/0bN2DlO42PU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=0bN2DlO42PU",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 178,
        "title": "Tipos de Profesores en la Universidad 🔥 Como aprender del profesor que me toca en suerte",
        "thumbnail": "https://img.youtube.com/vi/j-hKEaLat98/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=j-hKEaLat98&t=159s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 179,
        "title": "3D a 2D AutoCad SOLUCION DEFINITIVA| como convertir pasar plano dibujo aplanar lineas | LISP",
        "thumbnail": "https://img.youtube.com/vi/wGsyiy8_mMk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=wGsyiy8_mMk&t=1s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 180,
        "title": "Como romper con la ortogonalidad de tu proyecto | AutoCAD UCS SCP UCSMAN ADMINSCP UCSFOLLOW F8 ORTO",
        "thumbnail": "https://img.youtube.com/vi/mHi_C2Z8A1Y/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=mHi_C2Z8A1Y&t=2s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 181,
        "title": "AUTOCAD | Flujo de Trabajo MULTIPLANTA!!! | Ideal para el ARQUITECTO o el INGENIERO independiente",
        "thumbnail": "https://img.youtube.com/vi/CdUJGmAL-WE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=CdUJGmAL-WE",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 182,
        "title": "crear Capas automaticamente | Mejorar flujo de trabajo Autocad | Script un solo click",
        "thumbnail": "https://img.youtube.com/vi/-wCGGpswqvI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=-wCGGpswqvI&t=20s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 183,
        "title": "TWINMOTION 2021 | tutorial español NOVEDADES | 2021.1 | al final... ME ENOJO!!!  (UNREAL ENGINE)",
        "thumbnail": "https://img.youtube.com/vi/tlGOjppwd74/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=tlGOjppwd74&t=28s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 184,
        "title": "VRAY en tiempo real GRATIS! | Chaos VANTAGE tutorial en ESPAÑOL | descargar download | real time",
        "thumbnail": "https://img.youtube.com/vi/ZKPRC41-F_o/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ZKPRC41-F_o",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 185,
        "title": "AutoCAD 2022 | Todo lo NUEVO | ventanas flotantes count recuento trazo trace y mas NOVEDADES",
        "thumbnail": "https://img.youtube.com/vi/NaSZrLNPZOo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=NaSZrLNPZOo&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 186,
        "title": "PDF a DWG | 4 casos | como convertir un pdf a AutoCad | Versión 2018 2019 2020 2021",
        "thumbnail": "https://img.youtube.com/vi/l10YLd55tMs/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=l10YLd55tMs&t=1013s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 187,
        "title": "CLAVES para mostrar tu proyecto de ARQUITECTURA a través de CORTES o secciones ARQUITECTONICAS",
        "thumbnail": "https://img.youtube.com/vi/emTddi7uDV4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=emTddi7uDV4",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 188,
        "title": "Lo que nadie te cuenta del NUEVO ENSCAPE 3.0 | Novedades | Nueva version | Actualización",
        "thumbnail": "https://img.youtube.com/vi/g6RxT5zMCeo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=g6RxT5zMCeo",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 189,
        "title": "TRUCAZO de AutoCAD | Escala REAL en la pantalla de tu Monitor SIN IMPRIMIR!!!",
        "thumbnail": "https://img.youtube.com/vi/0vwz3P1EoTg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=0vwz3P1EoTg",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 190,
        "title": "5 Tips para mejorar mi velocidad en AutoCAD | Atajos Alias Coordenadas cartesianas polares PGP",
        "thumbnail": "https://img.youtube.com/vi/wbHORZ6d0iU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=wbHORZ6d0iU&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 191,
        "title": "AutoCAD comandos RAPIDOS | Atajos de teclado | Alias | PGP | ingles español | TRUCOS | TUTORIAL",
        "thumbnail": "https://img.youtube.com/vi/cPolaIZDus0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=cPolaIZDus0&t=2s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 192,
        "title": "SketchUp modelado de ARQUITECTURA desde cero | TUTORIAL español BASICO para arquitectos 2da PARTE",
        "thumbnail": "https://img.youtube.com/vi/_xHySbtGN2I/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=_xHySbtGN2I&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 193,
        "title": "SketchUp modelado de ARQUITECTURA desde cero | TUTORIAL español BASICO para arquitectos 1ra PARTE",
        "thumbnail": "https://img.youtube.com/vi/HYg3Kiq8dRU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=HYg3Kiq8dRU&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 194,
        "title": "AutoCAD para PRINCIPIANTES | tutorial en ESPAÑOL | Curso ARQUITECTURA 2D desde CERO",
        "thumbnail": "https://img.youtube.com/vi/21ionCt8zyo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=21ionCt8zyo&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 195,
        "title": "Como iluminar un render interior usando Light Mix | Vray 5 | Sketchup",
        "thumbnail": "https://img.youtube.com/vi/Soz08UnuDeI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Soz08UnuDeI&t=22s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 196,
        "title": "Primer DIRECTO del 2021 (y de mi vida!!! Sepan disculpar las molestias ocasionadas)",
        "thumbnail": "https://img.youtube.com/vi/zODD5uesTc0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=zODD5uesTc0&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 197,
        "title": "Respondo todas tus preguntas | Arquitectura Software Universidad Trabajos Libros y mucho mas!",
        "thumbnail": "https://img.youtube.com/vi/8aymp4JRbI0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=8aymp4JRbI0&t=190s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 198,
        "title": "La historia del rendering a traves de mis renders y proyectos de arquitectura | 1992-2020",
        "thumbnail": "https://img.youtube.com/vi/ds4tuAzlxJs/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ds4tuAzlxJs&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 199,
        "title": "VRAY 5 sketchup desde cero | tutorial español | en menos de 45 minutos | exterior interior next",
        "thumbnail": "https://img.youtube.com/vi/fVWXtAsTnUk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=fVWXtAsTnUk&t=75s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 200,
        "title": "Numerar automaticamente en Autocad | numeración automatica y consecutiva | bloques numeros escaleras",
        "thumbnail": "https://img.youtube.com/vi/vLywe6Hr-Uo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=vLywe6Hr-Uo&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 201,
        "title": "Materiales PBR GRATIS para cualquier software de RENDER | Enscape Twinmotion D5 Lumion Blender Vray",
        "thumbnail": "https://img.youtube.com/vi/ge2KIqxCeyo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ge2KIqxCeyo&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 202,
        "title": "D5 render 1.7.1 SOFTWARE GRATUITO | tutorial ESPAÑOL | para sketchup rhino blender archicad y revit",
        "thumbnail": "https://img.youtube.com/vi/4l4ln28ETcM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=4l4ln28ETcM&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 203,
        "title": "La grAfica ARQUITECToNICA que hace furor en las redes | axonometrIa isomEtrica diagramas CONCEPTO",
        "thumbnail": "https://img.youtube.com/vi/gAx_lGGJHNo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=gAx_lGGJHNo&t=3s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 204,
        "title": "Enscape 2.9 ⭐⭐⭐NUEVA VERSIÓN⭐⭐⭐Todo lo NUEVO!!! | Desplazamiento | Mapas de Video y mucho mas!!!",
        "thumbnail": "https://img.youtube.com/vi/IPUozpAQyz0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=IPUozpAQyz0&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 205,
        "title": "TODO sobre TIPOS de LINEAS en AutoCAD. Como crear, escalar líneas discontinuas 2018 2021",
        "thumbnail": "https://img.youtube.com/vi/DmtNYo2rrO4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=DmtNYo2rrO4&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 206,
        "title": "El software de rendering que estaba esperando... INCREIBLE!!! Enscape 2.8 en Sketchup",
        "thumbnail": "https://img.youtube.com/vi/7KM0prj4yuM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=7KM0prj4yuM&t=125s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 207,
        "title": "PLANTA ArquitectOnica PHOTOSHOP | TUTORIAL PASO A PASO | ARQUITECTURA ambientada y humanizada",
        "thumbnail": "https://img.youtube.com/vi/gNGz0iVGqdQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=gNGz0iVGqdQ&t=227s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 208,
        "title": "¡DESAFÍO! ¿Cuánto SABES de AutoCAD??? Siempre hay formas más eficientes de hacer las cosas.",
        "thumbnail": "https://img.youtube.com/vi/ymru7lRqCGo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ymru7lRqCGo&t=398s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 209,
        "title": "PHOTOSHOP ARQUITECTURA collage con texturas | ILUSTRACION digital TUTORIAL en ESPAÑOL paso a paso",
        "thumbnail": "https://img.youtube.com/vi/301iekgTHIE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=301iekgTHIE&t=23s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 210,
        "title": "AutoCAD HATCH Sombreado Achurados 30 SOLUCIONES y TIPS a problemas y errores TUTORIAL en español",
        "thumbnail": "https://img.youtube.com/vi/VeIV-9tu6Yo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=VeIV-9tu6Yo&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 211,
        "title": "Entrevista arqMANES + Concurso (sobre gustos no hay nada escrito)",
        "thumbnail": "https://img.youtube.com/vi/I_KIUxXIahg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=I_KIUxXIahg&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 212,
        "title": "😷REFERENCIAS EXTERNAS AutoCad | Como usar XREF o REFX | Trabajar en grupo remotamente (Introduccion)",
        "thumbnail": "https://img.youtube.com/vi/y90WAAYm2_w/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=y90WAAYm2_w&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 213,
        "title": "AutoCAD Layout Presentacion TUTORIAL ESPAÑOL espacio papel escala ventana viewport como imprimir",
        "thumbnail": "https://img.youtube.com/vi/uM_uvGfMGzk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=uM_uvGfMGzk&t=11s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 214,
        "title": "Unidades Autocad en METROS | como saber configurar cambiar mudar trabajar medidas 2018 2019 2021",
        "thumbnail": "https://img.youtube.com/vi/T--tJkrxZrU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=T--tJkrxZrU&t=2s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 215,
        "title": "🧟🧟♀️Familias Parametricas REVIT | TUTORIAL | como crear familia de ventana desde cero",
        "thumbnail": "https://img.youtube.com/vi/nGprBnxBTJ4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=nGprBnxBTJ4&t=2s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 216,
        "title": "TWINMOTION 2020 Tutorial ESPAÑOL | Novedades 2020.2 (como usar puesta en fases y animadores)",
        "thumbnail": "https://img.youtube.com/vi/OSx7h2WpVZM/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=OSx7h2WpVZM&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 217,
        "title": "PLANTILLA (Template) AutoCad (como crear hacer guardar insertar configurar cargar) ARQUITECTURA",
        "thumbnail": "https://img.youtube.com/vi/iRpwMM1Ik1g/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=iRpwMM1Ik1g&t=1s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 218,
        "title": "ATRIBUTOS CAMPOS (fields) TABLAS Estilo Texto ANOTATIVO EXTRAER DATOS bloques dinamicos AutoCAD",
        "thumbnail": "https://img.youtube.com/vi/N-5htY5hX2U/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=N-5htY5hX2U&t=1s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 219,
        "title": "COTAS | Como ACOTAR | estilos | autocad | anotativas | modificar | tamaño | acumuladas | replanteo",
        "thumbnail": "https://img.youtube.com/vi/hZhUotH9_GI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=hZhUotH9_GI&t=72s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 220,
        "title": "Como AUMENTAR velocidad de render VRAY NEXT SketchUp | TUTORIAL desde cero | configuracion 3.4",
        "thumbnail": "https://img.youtube.com/vi/iiKbnwMJpAs/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=iiKbnwMJpAs&t=1169s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 221,
        "title": "CAPAS (LAYERS) en AutoCAD | Necesitas saber ESTO! Propiedades configurar layer 2018 2019 2020 2021",
        "thumbnail": "https://img.youtube.com/vi/asLXMVjDHgs/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=asLXMVjDHgs&t=428s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 222,
        "title": "Escalas ANOTATIVAS en AutoCad (cotas texto hatch bloques layout todo anotativo)",
        "thumbnail": "https://img.youtube.com/vi/8ahjHyOblKg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=8ahjHyOblKg&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 223,
        "title": "Mi Flujo de Trabajo en AutoCad | Planta arquitectonica | Estados de capa | Layer State | Trucos",
        "thumbnail": "https://img.youtube.com/vi/kSOoZnUan0U/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=kSOoZnUan0U&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 224,
        "title": "PANELES arquitectonicos | LAMINAS de arquitectura | ENTREGA | PLANCHAS arquitectonicas",
        "thumbnail": "https://img.youtube.com/vi/e210v-mgZDE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=e210v-mgZDE&t=1568s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 225,
        "title": "RENDER estilo MAQUETA | Regalo Especial! 100.000 SUSCRIPTORES Plantilla Template | como hacer?",
        "thumbnail": "https://img.youtube.com/vi/-rmQcCHsY5o/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=-rmQcCHsY5o&t=1623s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 226,
        "title": "Bloques DINAMICOS #2 Autocad (Visibilidad Polar Avanzados)",
        "thumbnail": "https://img.youtube.com/vi/4Kp0TzcoSfA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=4Kp0TzcoSfA&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 227,
        "title": "COMO exportar SOMBRAS de SketchUp a AutoCAD (fachadas, alzados, elevaciones arquitectónicas) 2D",
        "thumbnail": "https://img.youtube.com/vi/iT6522CtMDY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=iT6522CtMDY&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 228,
        "title": "PROBLEMAS en REVIT? | Tutorial (Principiantes) proyeccion pilares vigas muros escaleras lineas",
        "thumbnail": "https://img.youtube.com/vi/FIEKjwM1DPo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=FIEKjwM1DPo&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 229,
        "title": "Como hacer TOPOGRAFIA 3D terreno y CURVAS de NIVEL | Sketchup Revit Google Earth Cad Global Mapper",
        "thumbnail": "https://img.youtube.com/vi/E0EPEn28w4g/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=E0EPEn28w4g&t=2224s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 230,
        "title": "Como dibujar escalera en planta | arquitectura (autocad revit )",
        "thumbnail": "https://img.youtube.com/vi/niEXo-lh5E4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=niEXo-lh5E4&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 231,
        "title": "CUALES son los ERRORES mas frecuentes en ENTREGAS de ARQUITECTURA? | Dibujo cotas hatch texto planos",
        "thumbnail": "https://img.youtube.com/vi/DORWFZB0i9U/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=DORWFZB0i9U&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 232,
        "title": "Calidad Espesor Grosor Valoraciones de LINEA en dibujo ARQUITECTURA cualquier Escala 1 50 100 200",
        "thumbnail": "https://img.youtube.com/vi/h3x4DP2V-jU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=h3x4DP2V-jU&t=3s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 233,
        "title": "Muro Cortina REVIT | como hacer, crear, editar, modificar, puerta, ventana, rejilla, etc.",
        "thumbnail": "https://img.youtube.com/vi/CfA2Im-bcRE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=CfA2Im-bcRE&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 234,
        "title": "EXPORTAR de SketchUp a AutoCad | Plantas Vistas Cortes Secciones Alzados Fachadas Planos 2D",
        "thumbnail": "https://img.youtube.com/vi/Y0QBendaN-w/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Y0QBendaN-w&t=18s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 235,
        "title": "Como usar REVIT | Tutorial Español | Modelar Casa Citrohan | Nivel Inicial para Principiantes 2021",
        "thumbnail": "https://img.youtube.com/vi/njy6im0cQCw/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=njy6im0cQCw&t=4s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 236,
        "title": "Dibujo Tecnico ARQUITECTONICO | Dibujar Plantas Vistas y Cortes en ARQUITECTURA | Planos",
        "thumbnail": "https://img.youtube.com/vi/U1cCesRKbfo/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=U1cCesRKbfo&t=181s",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 237,
        "title": "LUMION 10 Tutorial | en español",
        "thumbnail": "https://img.youtube.com/vi/L1IfnWS24ko/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=L1IfnWS24ko&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 238,
        "title": "SOLIDOS SketchUp | por qué no siempre funcionan? | Sirve el Solid Inspector?",
        "thumbnail": "https://img.youtube.com/vi/ij1Kby2_Efg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=ij1Kby2_Efg&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 239,
        "title": "AutoCad a REVIT",
        "thumbnail": "https://img.youtube.com/vi/m_lQ2ngrLaQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=m_lQ2ngrLaQ&t=115s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 240,
        "title": "Bloques DINAMICOS AutoCad",
        "thumbnail": "https://img.youtube.com/vi/FdMqRxXf0pQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=FdMqRxXf0pQ&t=10s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 241,
        "title": "PARA QUE cambiar fondo de AUTOCAD???",
        "thumbnail": "https://img.youtube.com/vi/e1CZxb1dJFA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=e1CZxb1dJFA&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 242,
        "title": "Modelar en SketchUp. Arquitectura desde cero. Sin plugins",
        "thumbnail": "https://img.youtube.com/vi/fqn8dFTU4fI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=fqn8dFTU4fI&t=2s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 243,
        "title": "Modelar en SketchUp | 9 Tips | Modelado de ARQUITECTURA ✏️",
        "thumbnail": "https://img.youtube.com/vi/7RvNi1_V0Vk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=7RvNi1_V0Vk&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 244,
        "title": "de Autocad a Sketchup",
        "thumbnail": "https://img.youtube.com/vi/1pMqnDUCMdE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=1pMqnDUCMdE&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 245,
        "title": "Lumion vs Twinmotion en español",
        "thumbnail": "https://img.youtube.com/vi/yOLz3WHiyIE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=yOLz3WHiyIE&t=8s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 246,
        "title": "TWINMOTION como instalar 2020 GRATIS para ESTUDIANTES",
        "thumbnail": "https://img.youtube.com/vi/uG7aZAWOWzY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=uG7aZAWOWzY&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 247,
        "title": "TWINMOTION tutorial español",
        "thumbnail": "https://img.youtube.com/vi/sH7cM7gX6s8/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=sH7cM7gX6s8&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 248,
        "title": "Poner MATERIALES en sketchup 2020",
        "thumbnail": "https://img.youtube.com/vi/X0EL_xUIRhY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=X0EL_xUIRhY&t=1s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 249,
        "title": "Outliner Sketchup 2020",
        "thumbnail": "https://img.youtube.com/vi/3AgXdKU9ZWk/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=3AgXdKU9ZWk&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 250,
        "title": "pasar plano de 3D a 2D AutoCad. Comando Flatten para aplanar lineas y llevar a cota cero (z=0)",
        "thumbnail": "https://img.youtube.com/vi/b-QxoAp7UdE/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=b-QxoAp7UdE&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 251,
        "title": "ESCALERA Como diseñar, dibujar en sketchup 3D y calcular (diseño dibujo y cálculo muy facil)",
        "thumbnail": "https://img.youtube.com/vi/Ajf8TnJxFvQ/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Ajf8TnJxFvQ&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 252,
        "title": "Imprimir en Autocad. CTB Plumillas Escala PDF Layout",
        "thumbnail": "https://img.youtube.com/vi/Fx-OvSMjinc/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Fx-OvSMjinc&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 253,
        "title": "TIPOS de LINEAS Autocad",
        "thumbnail": "https://img.youtube.com/vi/NXdBlu-3xxU/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=NXdBlu-3xxU&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 254,
        "title": "by LAYER by BLOCK AutoCad - Diferencias",
        "thumbnail": "https://img.youtube.com/vi/f6FWyyKTmhI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=f6FWyyKTmhI&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 255,
        "title": "Insertar IMAGEN en Autocad y ESCALARLA",
        "thumbnail": "https://img.youtube.com/vi/3pcXxCOeev4/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=3pcXxCOeev4&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 256,
        "title": "Como hacer un RENDER REALISTA",
        "thumbnail": "https://img.youtube.com/vi/Mr0tOOa6WKg/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=Mr0tOOa6WKg&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 257,
        "title": "Style Builder SKETCHUP TUTORIAL español",
        "thumbnail": "https://img.youtube.com/vi/K4M9SrqueII/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=K4M9SrqueII&t=29s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 258,
        "title": "CROQUIS Arquitectura. ACUARELA Photoshop.-TUTORIAL paso a paso",
        "thumbnail": "https://img.youtube.com/vi/_9ek1xQqD2s/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=_9ek1xQqD2s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 259,
        "title": "Como pasar de AUTOCAD a PHOTOSHOP sin perder calidad | 2019",
        "thumbnail": "https://img.youtube.com/vi/mu5VDiB78mI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=mu5VDiB78mI&t=179s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 260,
        "title": "Como hacer un CORTE FUGADO - TUTORIAL - AutoCad + SketchUp. CORTE PERSPECTIVADO",
        "thumbnail": "https://img.youtube.com/vi/1UVqGvP7IW0/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=1UVqGvP7IW0&t=120s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 261,
        "title": "Problemas con Bloques Autocad. Como ARREGLAR mis bloques de Autocad en UN SOLO CLICK!!!",
        "thumbnail": "https://img.youtube.com/vi/mESO1As1QZY/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=mESO1As1QZY&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 262,
        "title": "Como hacer bloques en Autocad BIEN!!!!",
        "thumbnail": "https://img.youtube.com/vi/cX1oL3hqzxA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=cX1oL3hqzxA&t=70s&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 263,
        "title": "PARA QUE sirven los bloques en Autocad ???",
        "thumbnail": "https://img.youtube.com/vi/i4t8DOCxr2k/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=i4t8DOCxr2k&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 264,
        "title": "Renders ARQUITECTURA Programas | ¿cual elegir? ¿LUMION o 3D MAX? ¿que estoy haciendo mal?",
        "thumbnail": "https://img.youtube.com/vi/gDoS66A_kCI/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=gDoS66A_kCI&ab_channel=arqMANES",
        "category": "Arquitectura",
        "status": "Active"
    },
    {
        "id": 265,
        "title": "Bienvenidos!!!",
        "thumbnail": "https://img.youtube.com/vi/eSsp0w10yFA/maxresdefault.jpg",
        "duration": "10:00",
        "link": "https://www.youtube.com/watch?v=eSsp0w10yFA",
        "category": "Arquitectura",
        "status": "Active"
    }
];

document.addEventListener('DOMContentLoaded', async () => {
    const tableGrid = document.getElementById('content-grid');
    const featuredGrid = document.getElementById('featured-grid');
    const agendaGrid = document.getElementById('agenda-grid');
    const actividadesProximasGrid = document.getElementById('actividades-proximas');
    const actividadesRecientesGrid = document.getElementById('actividades-recientes');
    let featuredData = [];
    let agendaData = [];

    // 0. Fetch Activities Data (state computed at runtime from fecha_iso)
    if (actividadesProximasGrid || actividadesRecientesGrid) {
        try {
            const response = await fetch('./data/actividad.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const actividades = await response.json();

            // Date-only comparison (ignore hours to avoid mid-day disappearance)
            const todayStr = new Date().toISOString().split('T')[0];

            // Upcoming: fecha_iso >= today, sorted closest first
            const proximas = actividades
                .filter(a => a.fecha_iso >= todayStr)
                .sort((a, b) => a.fecha_iso.localeCompare(b.fecha_iso))
                .slice(0, 3);

            // Past: fecha_iso < today, sorted most recent first
            const recientes = actividades
                .filter(a => a.fecha_iso < todayStr)
                .sort((a, b) => b.fecha_iso.localeCompare(a.fecha_iso))
                .slice(0, 3);

            if (actividadesProximasGrid) renderActivityCards(proximas, actividadesProximasGrid, todayStr);
            if (actividadesRecientesGrid) renderActivityCards(recientes, actividadesRecientesGrid, todayStr);
        } catch (error) {
            console.error('Error fetching activities:', error);
            const errMsg = `<div class="col-span-full text-center p-6 glass-card border border-red-500/30 rounded-xl"><p class="text-red-400 text-sm font-mono">⚠️ No se pudieron cargar las actividades.</p></div>`;
            if (actividadesProximasGrid) actividadesProximasGrid.innerHTML = errMsg;
            if (actividadesRecientesGrid) actividadesRecientesGrid.innerHTML = errMsg;
        }
    }

    // 0b. Fetch Memoria Data
    const memoriaList = document.getElementById('memoria-list');
    const memoriaReader = document.getElementById('memoria-reader');
    const memoriaContent = document.getElementById('memoria-content');
    const memoriaClose = document.getElementById('memoria-close');

    if (memoriaList) {
        try {
            const response = await fetch('./data/memoria.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const memorias = await response.json();

            // Sort by date descending
            const sorted = [...memorias].sort((a, b) => b.fecha_iso.localeCompare(a.fecha_iso));

            memoriaList.innerHTML = '';

            if (sorted.length === 0) {
                memoriaList.innerHTML = '<div class="text-center p-6 text-gray-500 text-sm italic">No hay memorias publicadas aún.</div>';
            } else {
                sorted.forEach(item => {
                    const row = document.createElement('div');
                    row.className = 'memoria-item glass-card rounded-lg px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 group';
                    row.innerHTML = `
                        <div class="flex-grow">
                            <h4 class="text-sm font-bold text-gray-200 group-hover:text-neon-green transition-colors leading-tight">
                                ${item.titulo}
                            </h4>
                        </div>
                        <div class="flex items-center gap-3 flex-shrink-0">
                            <span class="memoria-badge">${item.categoria}</span>
                            <span class="text-[10px] text-gray-500 font-mono">${item.fecha_iso}</span>
                            <span class="text-[10px] text-gray-600 font-mono">${item.lectura} min</span>
                        </div>
                    `;
                    row.addEventListener('click', () => openMemoria(item));
                    memoriaList.appendChild(row);
                });
            }
        } catch (error) {
            console.error('Error fetching memorias:', error);
            memoriaList.innerHTML = '<div class="text-center p-6 glass-card border border-red-500/30 rounded-xl"><p class="text-red-400 text-sm font-mono">⚠️ No se pudieron cargar las memorias.</p></div>';
        }
    }

    function simpleMarkdownToHtml(md) {
        return md
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^# (.+)$/gm, '<h1>$1</h1>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
                return match.includes('1.') ? `<ol>${match}</ol>` : `<ul>${match}</ul>`;
            })
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(?!<[houl])/gm, (match, offset, str) => {
                const before = str.substring(Math.max(0, offset - 5), offset);
                if (before.includes('<')) return match;
                return match;
            });
    }

    function openMemoria(item) {
        if (!memoriaReader || !memoriaContent || !memoriaList) return;
        const html = simpleMarkdownToHtml(item.contenido_md);

        // Construir imagen si existe
        const imageHtml = item.imagen ?
            `<img src="${item.imagen}" alt="${item.titulo}" class="w-full h-auto rounded-xl shadow-lg shadow-neon-blue/20 mb-8 object-cover max-h-[400px]">`
            : '';

        memoriaContent.innerHTML = `
        ${imageHtml}
        <div class="mb-6 flex items-center gap-3">
                <span class="memoria-badge">${item.categoria}</span>
                <span class="text-xs text-gray-500 font-mono">${item.fecha_iso}</span>
                <span class="text-xs text-gray-600 font-mono">${item.lectura} min de lectura</span>
            </div>
            <div>${html}</div>
            <div class="mt-8 pt-6 border-t border-white/5">
                <div class="bluf-capsule pl-4 py-3 mb-4">
                    <p class="text-[10px] font-bold text-neon-green/60 uppercase tracking-widest mb-1">SÍNTESIS</p>
                    <p class="text-sm text-gray-300 leading-relaxed">${item.bluf}</p>
                </div>
                <div class="pl-4 py-2 mb-8">
                    <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">ANÁLISIS TÉCNICO</p>
                    <p class="text-xs text-gray-400 leading-relaxed">${item.hecho_atomico}</p>
                </div>
                <button id="memoria-close-bottom"
                    class="text-xs font-bold text-gray-500 hover:text-neon-green uppercase tracking-widest flex items-center gap-2 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    VOLVER A LA LISTA
                </button>
            </div>
        `;
        const closeBottom = document.getElementById('memoria-close-bottom');
        if (closeBottom) {
            closeBottom.addEventListener('click', () => {
                memoriaReader.classList.add('hidden');
                memoriaList.classList.remove('hidden');
                document.getElementById('memoria').scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
        memoriaList.classList.add('hidden');
        memoriaReader.classList.remove('hidden');
        document.getElementById('memoria').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (memoriaClose) {
        memoriaClose.addEventListener('click', () => {
            memoriaReader.classList.add('hidden');
            memoriaList.classList.remove('hidden');
            document.getElementById('memoria').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // 1. Fetch Featured Data
    if (featuredGrid) {
        try {
            const response = await fetch('./data/videos.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const rawData = await response.json();

            // Map Spanish keys from SSOT to internal English keys
            featuredData = rawData.map(v => ({
                id: v.id,
                title: v.titulo,
                date: v.fecha,
                bluf: v.bluf,
                atomic_fact: v.hecho_atomico,
                category: v.categoria,
                link: v.url,
                thumbnail: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`
            }));

            renderFeaturedCards(featuredData, featuredGrid);
        } catch (error) {
            console.error('Error fetching featured data:', error);
            featuredGrid.innerHTML = `
                <div class="col-span-1 md:col-span-3 text-center p-6 glass-card border border-red-500/30 rounded-xl">
                    <p class="text-red-400 text-sm font-mono">⚠️ No se pudieron cargar los destacados.</p>
                </div>
            `;
        }
    }

    // 2. Fetch Agenda Data (DISABLED - RESIDUAL CONTENT REMOVED)
    /*
    if (agendaGrid) {
        try {
            const response = await fetch('./agenda.json');
            if (!response.ok) throw new Error('Network response was not ok');
            agendaData = await response.json();
            renderAgenda(agendaData, agendaGrid);
        } catch (error) {
            console.error('Error fetching agenda data:', error);
            agendaGrid.innerHTML = `
                 <div class="col-span-full text-center p-6 glass-card border border-red-500/30 rounded-xl">
                    <p class="text-red-400 text-sm font-mono">⚠️ No se pudo cargar la agenda.</p>
                </div>
            `;
        }
    }
    */

    // 2. Fetch all data sources
    Promise.all([
        fetch('./data/videos.json').then(res => res.json()),
        fetch('./Videos youtube.csv').then(res => res.text())
    ])
        .then(([jsonData, csvText]) => {
            // Map Spanish keys from SSOT to internal English keys
            const featuredData = jsonData.map(v => ({
                id: v.id,
                title: v.titulo,
                date: v.fecha || 'Reciente',
                bluf: v.bluf,
                atomic_fact: v.hecho_atomico,
                category: v.categoria,
                link: v.url,
                type: v.tipo || 'VIDEO',
                duration: v.duration || '10:00',
                thumbnail: v.thumbnail || `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`
            }));

            const allVideos = parseVideoCSV(csvText);

            // Sort videos by ID descending (Column 1 is the Guide)
            // IDs go from 811 (oldest) to 1075+ (newest)
            allVideos.sort((a, b) => b.id - a.id);

            // 1. Render Recent Content (Top 9 combined)
            if (featuredGrid) {
                // Combine explicit featured items with newest from archive, ensuring 9 slots
                const combinedRecent = [...featuredData, ...allVideos].slice(0, 9);
                renderFeaturedCards(combinedRecent, featuredGrid);
            }

            // 2. Render Technical Table (Total History from CSV)
            if (tableGrid) {
                const countDisplay = document.getElementById('video-count');
                if (countDisplay) countDisplay.textContent = allVideos.length;
                renderGeoCards(allVideos, tableGrid);
            }

            // 3. Generate Schema from BOTH sources for maximum authority
            generateGeoSchema([...featuredData, ...allVideos]);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            if (featuredGrid) featuredGrid.innerHTML = '<p class="text-red-500">Error cargando contenidos.</p>';
            if (tableGrid) tableGrid.innerHTML = '<p class="text-red-500">Error cargando el historial de videos.</p>';
        });

    generateAgendaSchema(agendaData); // New Schema for Events
});

/**
 * Robust CSV parser that handles multi-line fields and quoted commas
 * @param {string} text - Raw CSV content
 */
function parseVideoCSV(text) {
    if (!text) return [];

    const records = [];
    let field = '';
    let inQuotes = false;
    let record = [];

    // Character-by-character parsing to handle quotes and newlines correctly
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const next = text[i + 1];

        if (char === '"') {
            if (inQuotes && next === '"') {
                field += '"';
                i++; // Skip double quote
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

    return records.map(row => {
        if (row.length < 7) return null;

        const id = parseInt(row[0].replace(/[^\d]/g, '')) || 0;
        const link = row[6] || '';
        const videoId = link.match(/(?:v=|\/)([\w-]{11})/)?.[1];
        if (!videoId || !row[4]) return null;

        const desc = (row[5] || '').replace(/^"|"$/g, '').trim();
        const synthesis = desc.split(/\s+/).slice(0, 15).join(' ') + (desc.split(/\s+/).length > 15 ? '...' : '');

        return {
            id: id,
            title: row[4].replace(/^"|"$/g, '').trim(),
            category: row[1].replace(/^"|"$/g, '').trim(),
            date: row[2].replace(/^"|"$/g, '').trim(),
            description: desc,
            bluf: synthesis,
            link: link,
            thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
        };
    }).filter(v => v !== null);
}

function getSoftwareFromTitle(title) {
    const softwareList = [
        'Autocad', 'Revit', 'Sketchup', 'Lumion', 'Twinmotion', 'Vray', 'V-Ray',
        'D5', 'Enscape', 'Photoshop', 'Midjourney', 'Stable Diffusion', 'PromeAI',
        'ChatGPT', 'Kling', 'Luma', 'Runway', 'Krea', 'Veras', 'Civil', 'BIM', 'ZWCAD',
        'Unreal', 'Blender'
    ];

    const lowerTitle = title ? title.toLowerCase() : '';
    for (const software of softwareList) {
        if (lowerTitle.includes(software.toLowerCase())) {
            return software;
        }
    }
    return 'ARQUITECTURA'; // Default
}

function renderGeoCards(data, container) {
    container.innerHTML = ''; // Clear loading state

    data.forEach(card => {
        const item = document.createElement('div');

        // Base classes: Mobile Stack -> Desktop Grid (2-5-3-2)
        item.className = 'glass-card p-4 rounded-xl flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center hover:bg-white/5 transition-all group cursor-pointer border-l-4 border-l-transparent hover:border-l-neon-green';

        item.innerHTML = `
            <!-- Column 1: Thumbnail (Desktop: 2 cols) -->
            <div class="col-span-12 md:col-span-2 w-full">
                <div class="relative aspect-video rounded overflow-hidden border border-white/10 group-hover:border-neon-green/50 transition-colors shadow-lg">
                    <img src="${card.thumbnail}" alt="${card.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                </div>
            </div>

            <!-- Column 2: Identity (Desktop: 5 cols) -->
            <div class="col-span-12 md:col-span-5 w-full flex flex-col gap-1">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-bold text-neon-green uppercase tracking-[0.2em]">
                        ${card.category || 'CONTENIDO'}
                    </span>
                    <span class="text-[9px] font-mono text-gray-500 uppercase">
                        ${card.date || ''}
                    </span>
                </div>
                <h3 class="text-sm font-bold text-gray-200 group-hover:text-white transition-colors leading-snug">
                    ${card.title}
                </h3>
            </div>

            <!-- Column 3: Synthesis (Desktop: 3 cols) -->
            <div class="col-span-12 md:col-span-3 w-full">
                <p class="text-[11px] text-gray-400 font-light italic leading-relaxed line-clamp-2 md:text-center px-2">
                    "${card.bluf || 'Sin síntesis disponible.'}"
                </p>
            </div>

            <!-- Column 4: Action (Desktop: 2 cols) -->
            <div class="col-span-12 md:col-span-2 flex justify-end w-full">
                <a href="${card.link}" target="_blank" class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neon-green/50 group-hover:text-neon-green transition-colors group-hover:translate-x-1 duration-300">
                    Ver Ahora
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        `;

        container.appendChild(item);
    });
}

function renderFeaturedCards(data, container) {
    container.innerHTML = '';
    data.forEach((card, index) => {
        const item = document.createElement('article');
        // Mobile UX: Show only first 3 cards on mobile, others on desktop
        const visibilityClass = index < 3 ? 'flex' : 'hidden md:flex';
        item.className = `glass-card rounded-xl overflow-hidden group hover:border-neon-green/50 transition-all shadow-2xl flex-col h-full ${visibilityClass}`;
        item.setAttribute('data-geo-type', 'featured');

        const isArticle = card.type === 'ARTÍCULO';
        const actionText = isArticle ? 'Leer Ahora' : 'Ver Ahora';
        const playIcon = `<svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
        const bookIcon = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.246 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`;

        item.innerHTML = `
            <div class="aspect-video bg-gray-900 relative">
                <img src="${card.thumbnail}" alt="${card.title}" class="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-700">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-12 h-12 bg-neon-green text-black rounded-full flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-[0_0_20px_rgba(57,255,20,0.6)]">
                         ${isArticle ? bookIcon : playIcon}
                    </div>
                </div>
                <div class="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white text-[10px] font-mono rounded backdrop-blur-sm border border-white/10">
                    ${card.duration || 'VER AHORA'}
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
                            <strong class="text-neon-green uppercase tracking-wide text-[10px] block mb-1">> SÍNTESIS:</strong>
                            <span class="italic text-gray-400">"${card.bluf || 'Información no disponible.'}"</span>
                        </p>
                    </div>

                    ${card.atomic_fact ? `
                    <div class="mb-4 pl-3 border-l border-neon-blue/30">
                        <p class="text-[10px] text-gray-500 leading-tight">
                            <strong class="text-neon-blue uppercase">> ANÁLISIS TÉCNICO:</strong>
                            <br>
                            ${card.atomic_fact}
                        </p>
                    </div>` : ''}
                </div>

                <div class="flex justify-between items-center text-[10px] uppercase font-bold text-gray-500 mt-2 border-t border-white/5 pt-3">
                    <span class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full ${isArticle ? 'bg-neon-green shadow-[0_0_5px_rgba(57,255,20,0.6)]' : 'bg-neon-blue shadow-[0_0_5px_#00ffff]'}"></span>
                        ${card.topic || card.category || 'ANÁLISIS'}
                    </span>
                    <a href="${card.link}" target="_blank" class="text-neon-green hover:text-white transition-colors flex items-center gap-1 group/link hover:underline decoration-neon-green/50 underline-offset-4">
                        ${actionText}
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



function renderAgenda(data, container) {
    container.innerHTML = '';
    data.forEach(item => {
        const eventDate = new Date(item.date);
        const isPast = eventDate < new Date();
        const card = document.createElement('article');

        // Base classes
        let cardClasses = 'agenda-card glass-card p-6 rounded-xl flex flex-col h-full border-l-4 relative overflow-hidden group transition-all';

        if (isPast) {
            cardClasses += ' border-l-gray-600 opacity-50 grayscale-[0.5]';
        } else {
            cardClasses += ' border-l-transparent hover:border-l-neon-green';
        }

        card.className = cardClasses;

        card.innerHTML = `
             <div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg class="w-16 h-16 ${isPast ? 'text-gray-500' : 'text-neon-green'}" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
            </div>

            <div class="mb-4">
                <div class="flex justify-between items-start mb-3">
                    <span class="text-[10px] font-bold uppercase tracking-widest ${isPast ? 'text-gray-400 border-gray-500/30' : 'text-neon-blue border-neon-blue/30'} border px-2 py-1 rounded bg-white/5 inline-block">
                        ${item.type}
                    </span>
                    ${isPast ? '<span class="text-[10px] font-bold text-gray-500 tracking-tighter uppercase font-mono">[EXECUTED]</span>' : ''}
                </div>
                <h3 class="text-lg font-bold ${isPast ? 'text-gray-400' : 'text-gray-100 group-hover:text-neon-green'} leading-tight transition-colors">
                    ${item.title}
                </h3>
            </div>

            <div class="bluf-capsule p-3 rounded mb-4 bg-white/5">
                 <p class="text-xs text-gray-300 italic">
                    <strong class="${isPast ? 'text-gray-500' : 'text-neon-green'} not-italic uppercase text-[10px] tracking-wider block mb-1">> FOCUS:</strong>
                    "${item.bluf}"
                 </p>
            </div>

            <div class="mt-auto pt-4 border-t border-white/5 text-xs text-gray-400 space-y-2">
                <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 ${isPast ? 'text-gray-600' : 'text-neon-green'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    <span class="font-mono">${item.date}</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 ${isPast ? 'text-gray-600' : 'text-neon-green'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span>${item.location}</span>
                </div>
            </div>

            ${isPast ? `
                <div class="mt-4 w-full text-center py-2 rounded border border-gray-600/30 text-gray-500 text-xs font-bold uppercase tracking-widest bg-gray-600/5 cursor-not-allowed">
                    [REALIZADO]
                </div>
            ` : `
                <a href="${item.link}" target="_blank" class="mt-4 w-full text-center py-2 rounded border border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-black transition-all text-xs font-bold uppercase tracking-widest">
                    Confirmar Asistencia
                </a>
            `}
        `;
        container.appendChild(card);
    });
}


function generateAgendaSchema(data) {
    if (!data || data.length === 0) return;

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": data.map((item, index) => ({
            "@type": item.location.toLowerCase().includes('online') ? "BroadcastEvent" : "Event",
            "position": index + 1,
            "name": item.title,
            "description": (item.bluf ? item.bluf + " " : "") + "Actividad académica/profesional. Consultar disponibilidad y aranceles específicos mediante contacto directo.",
            "startDate": new Date(item.date).toISOString(),
            "endDate": item.endDate ? new Date(item.endDate).toISOString() : new Date(new Date(item.date).getTime() + 3 * 60 * 60 * 1000).toISOString(),
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "ARS",
                "availability": "https://schema.org/InStock"
            },
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": item.location.toLowerCase().includes('online')
                ? "https://schema.org/OnlineEventAttendanceMode"
                : "https://schema.org/OfflineEventAttendanceMode",
            "location": item.location.toLowerCase().includes('online')
                ? {
                    "@type": "VirtualLocation",
                    "url": item.link
                }
                : {
                    "@type": "Place",
                    "name": item.location,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": item.location
                    }
                },
            "image": item.thumbnail || "https://arqmanes.com/default-event.jpg",
            "performer": {
                "@type": "Person",
                "name": "arqMANES"
            },
            "organizer": {
                "@type": "Organization",
                "name": "arqMANES GEO Authority",
                "url": "https://arqmanes.com"
            }
        }))
    };

    let script = document.getElementById('schema-agenda');
    if (!script) {
        script = document.createElement('script');
        script.id = 'schema-agenda';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
    console.log('JSON-LD injected/updated for Agenda Schema.');
}


function renderActivityCards(data, container, todayStr) {
    container.innerHTML = '';

    if (!data || data.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center p-6 glass-card rounded-xl"><p class="text-gray-500 text-sm italic">No hay actividades para mostrar.</p></div>`;
        return;
    }

    data.forEach(item => {
        // Compute state at runtime from fecha_iso
        let estado, estadoLabel;
        if (item.fecha_iso === todayStr) {
            estado = 'en_curso';
            estadoLabel = '> EN CURSO';
        } else if (item.fecha_iso > todayStr) {
            estado = 'proximo';
            estadoLabel = '> PRÓXIMO';
        } else {
            estado = 'realizado';
            estadoLabel = '> REALIZADO';
        }

        const isRealizado = estado === 'realizado';
        const isEnCurso = estado === 'en_curso';
        const card = document.createElement('article');

        let cardClasses = 'activity-card glass-card rounded-xl p-6 flex flex-col h-full group';
        if (isRealizado) cardClasses += ' activity-card--realizado hidden md:flex';
        if (isEnCurso) cardClasses += ' activity-card--en-curso';

        card.className = cardClasses;

        // Check if BLUF / hecho_atomico have real content (not placeholders)
        const hasBluf = item.bluf && !item.bluf.includes('[COMPLETAR]');
        const hasHecho = item.hecho_atomico && !item.hecho_atomico.includes('[COMPLETAR]');
        const hasGeoData = hasBluf || hasHecho;

        // Generate unique ID for expand toggle
        const cardId = 'act-' + item.fecha_iso.replace(/-/g, '') + '-' + Math.random().toString(36).substr(2, 4);

        card.innerHTML = `
            <div class="mb-4 flex items-center justify-between">
                <span class="activity-badge ${isRealizado ? 'activity-badge--realizado' : 'activity-badge--proximo'}">
                    ${item.tipo}
                </span>
                <div class="flex items-center gap-2">
                    ${hasGeoData ? `
                        <button onclick="document.getElementById('${cardId}').classList.toggle('activity-detail--open')" class="hidden md:flex w-5 h-5 rounded-full border ${isRealizado ? 'border-gray-600 text-gray-600 hover:text-gray-400' : 'border-neon-green/30 text-neon-green/50 hover:text-neon-green'} items-center justify-center text-[10px] font-bold transition-colors cursor-pointer" title="Ver análisis GEO" aria-label="Ver análisis">
                            i
                        </button>
                    ` : ''}
                    <span class="text-[9px] font-bold uppercase tracking-widest font-mono ${isEnCurso ? 'text-neon-green animate-pulse' : isRealizado ? 'text-gray-600' : 'text-neon-green/50'}">
                        ${estadoLabel}
                    </span>
                </div>
            </div>

            <div class="flex-grow">
                <h4 class="text-base font-bold ${isRealizado ? 'text-gray-400' : 'text-gray-100 group-hover:text-neon-green'} leading-tight mb-3 transition-colors">
                    ${item.titulo}
                </h4>
                <div class="space-y-1 mb-4">
                    <p class="text-xs text-gray-400 flex items-center gap-2">
                        <svg class="w-3.5 h-3.5 ${isRealizado ? 'text-gray-600' : 'text-neon-green/60'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        ${item.institucion}
                    </p>
                    <p class="text-xs text-gray-500 flex items-center gap-2">
                        <svg class="w-3.5 h-3.5 ${isRealizado ? 'text-gray-600' : 'text-neon-green/60'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        ${item.ubicacion}
                        ${(() => {
                const flagMap = { 'argentina': 'ar', 'méxico': 'mx', 'mexico': 'mx', 'españa': 'es', 'spain': 'es', 'usa': 'us', 'estados unidos': 'us' };
                const p = (item.pais || '').toLowerCase().replace(/[^\w\sáéíóúñü]/g, '').trim();
                const code = Object.keys(flagMap).find(k => p.includes(k));
                if (code) return '<img src="https://flagcdn.com/w40/' + flagMap[code] + '.png" alt="' + item.pais + '" class="inline-block w-8 h-6 rounded-sm object-cover ml-1" style="vertical-align: middle;" />';
                if (p.includes('online')) return '<span class="ml-1" style="font-size:14px;">🌐</span>';
                return '';
            })()}
                    </p>
                </div>

                ${hasGeoData ? `
                <div id="${cardId}" class="activity-detail hidden md:block">
                    <div class="activity-detail-inner p-3 rounded-lg bg-white/5 border-l-2 ${isRealizado ? 'border-gray-600' : 'border-neon-green/40'} space-y-2">
                        ${hasHecho ? `
                        <p class="text-[10px] text-gray-400 leading-snug">
                            <strong class="${isRealizado ? 'text-gray-500' : 'text-neon-blue'} uppercase text-[9px] tracking-wider block mb-0.5">> ANÁLISIS TÉCNICO:</strong>
                            ${item.hecho_atomico}
                        </p>` : ''}
                        ${hasBluf ? `
                        <p class="text-[10px] text-gray-400 leading-snug italic">
                            <strong class="${isRealizado ? 'text-gray-500' : 'text-neon-green'} uppercase text-[9px] tracking-wider not-italic block mb-0.5">> SÍNTESIS:</strong>
                            "${item.bluf}"
                        </p>` : ''}
                    </div>
                </div>
                ` : ''}
            </div>

            <div class="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span class="text-sm font-bold ${isRealizado ? 'text-gray-500' : 'text-white'} font-mono tracking-tight">
                    ${item.fecha_display}
                </span>
                ${item.link && item.link !== '#' ? `
                    <a href="${item.link}" target="_blank" class="text-[10px] font-bold uppercase tracking-widest ${isRealizado ? 'text-gray-500 hover:text-gray-300' : 'text-neon-green/60 hover:text-neon-green'} transition-colors flex items-center gap-1">
                        MÁS INFO
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </a>
                ` : `
                    <span class="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        ${isRealizado ? 'REALIZADO' : ''}
                    </span>
                `}
            </div>
        `;

        container.appendChild(card);
    });
}

// --- FAQ (Invisible Data Layer) Initialization ---
async function initFAQ() {
    const schemaFaq = document.getElementById('schema-faq');
    if (!schemaFaq) return;

    try {
        // Fetch from the backup file as it's the "invisible" data source
        const response = await fetch('data/consultas-ia.json');
        if (!response.ok) throw new Error('Could not load consultas-ia.json');

        const data = await response.json();

        // Inject FAQ Schema for search engines and IAs
        injectFAQSchema(data, schemaFaq);

        console.log('✅ Invisible Data Layer (FAQ) initialized.');
    } catch (error) {
        console.error('❌ Error initializing Invisible Data Layer:', error);
    }
}

function injectFAQSchema(data, scriptTag) {
    if (!scriptTag) return;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.map(item => ({
            "@type": "Question",
            "name": item.pregunta,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.respuesta
            }
        }))
    };

    scriptTag.text = JSON.stringify(schema);
    console.log('✅ FAQ Schema injected (Invisible).');
}

// Call initialization
document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
});

function initAll() {
    console.log('arqMANES iA System Ready.');
}
