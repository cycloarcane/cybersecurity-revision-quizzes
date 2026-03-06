import os
import re

files_to_update = [
    "encryption-pqc.html",
    "active-directory-pentest.html",
    "crest-crt.html",
    "git-security.html",
    "mitre-attack.html",
    "networking.html",
    "owasp-agentic.html",
    "owasp-mas.html",
    "owasp-top10-2021.html",
    "owasp-top10-2025.html",
    "owasp-wstg.html",
    "portswigger-2025.html"
]

base_dirs = [
    "/home/r/Documents/cybersecurity-revision-quizzes/",
    "/home/r/Documents/cybersecurity-revision-quizzes/AndroidApp/app/src/main/assets/"
]

def update_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Look for the start-box div
    # We want to find the <p> ... </p> and then the button
    
    pattern = re.compile(r'(<div class="start-box">.*?<p>.*?</p>)\s*(<button[^>]*id="start-btn"[^>]*>.*?</button>)', re.DOTALL)
    
    def replacement(match):
        p_part = match.group(1)
        button_part = match.group(2)
        
        new_content = p_part + '\n            <div id="high-score" class="high-score-box">Best Score: --</div>\n'
        new_content += '            <div class="start-actions">\n'
        new_content += '                ' + button_part + '\n'
        new_content += '                <button class="btn btn-s" onclick="location.href=\'index.html\'">Back to Menu</button>\n'
        new_content += '            </div>'
        return new_content

    new_content, count = pattern.subn(replacement, content)
    
    if count > 0:
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"No match found in {file_path}")

for base_dir in base_dirs:
    for filename in files_to_update:
        full_path = os.path.join(base_dir, filename)
        if os.path.exists(full_path):
            update_file(full_path)
        else:
            print(f"File not found: {full_path}")
