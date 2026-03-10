import os
import sys

# Set output encoding to utf-8
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        # Fallback for older python versions
        import codecs
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

path = r"d:\190910-ARQM-Template\Respuestas.txt"
if os.path.exists(path):
    try:
        # Read as bytes and decode with utf-16-le, ignoring errors
        with open(path, "rb") as b:
            data = b.read()
            content = data.decode("utf-16-le", errors="replace")
        
        # Look for "1." followed by a question or something similar
        print("--- FILE START ---")
        print(content)
        print("--- FILE END ---")
    except Exception as e:
        print(f"Error: {e}")
else:
    print("File not found.")
