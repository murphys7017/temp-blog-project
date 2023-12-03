class PostItem(object):
    original_text = None
    metadata = None
    def __init__(self, file_path=None, str=None):
        if str is not None:
            self.original_text = str
        elif file_path is not None:
            with open(file_path,'r') as f:
                self.original_text = f.read()
                f.close()


import mistune



text = ("""
---
a: 1
---

a | b
- | -
1 | 2

A footnote [^1]

[^1]: some details
""")

print(mistune.markdown(text))

## To export the html to a file, uncomment the lines below:
# from pathlib import Path
# Path("output.html").write_text(html_text)