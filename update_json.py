import json
import re

# Read data.json
with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

new_article = data[0]

# Update videos.json
with open('data/videos.json', 'r', encoding='utf-8') as f:
    videos = json.load(f)

# Check if already added
if not any(v['id'] == new_article['id'] for v in videos):
    videos.insert(0, {
        "id": new_article["id"],
        "tipo": "ARTÍCULO",
        "titulo": new_article["title"],
        "fecha": new_article["date"],
        "bluf": new_article["bluf"],
        "hecho_atomico": new_article["atomic_fact"],
        "categoria": new_article["topic"],
        "url": new_article["link"],
        "thumbnail": new_article["thumbnail"],
        "duration": "LECTURA"
    })
    
    with open('data/videos.json', 'w', encoding='utf-8') as f:
        json.dump(videos, f, ensure_ascii=False, indent=4)
    print("Updated videos.json")
else:
    print("Already in videos.json")

# Update memoria.json
with open(r'C:\Users\Sergio\.gemini\antigravity\brain\67881262-1c01-4e57-9100-7a7ebcf51302\.system_generated\steps\126\content.md', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'(Hay una pregunta que muchos arquitectos.*?Está confundiendo memoria con inercia\.)', content, re.DOTALL)
if match:
    md_body = match.group(1)
    # clean up the text a bit (remove newlines from the list of links etc if any, but it seems pure text)
    
    with open('data/memoria.json', 'r', encoding='utf-8') as f:
        memoria = json.load(f)

    if not any(m['titulo'] == new_article['title'] for m in memoria):
        max_id = max([int(m["id"]) for m in memoria if m["id"].isdigit()])
        new_id = f"{max_id + 1:03d}"

        memoria.insert(0, {
            "id": new_id,
            "titulo": new_article["title"],
            "fecha_iso": new_article["date"],
            "categoria": new_article["topic"],
            "lectura": 4,
            "imagen": new_article["thumbnail"],
            "bluf": new_article["bluf"],
            "hecho_atomico": new_article["atomic_fact"],
            "slug": "la-universidad-sigue-formando-arquitectos",
            "contenido_md": "## " + new_article["title"] + "\n\n" + md_body
        })

        with open('data/memoria.json', 'w', encoding='utf-8') as f:
            json.dump(memoria, f, ensure_ascii=False, indent=4)
        print("Updated memoria.json")
    else:
        print("Already in memoria.json")
else:
    print("Could not find article body in content.md")
