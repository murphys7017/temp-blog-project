from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "https://hkngrok.murphyspolaris.icu",
    "*",
    "http://localhost",
    "http://localhost:5173/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





@app.get("/bsaeInfo")
def read_base_info():
    return {
            "Name": "Alice",
            "Description": "User Description",
            "ServerName": "Aki's Server",
            "ServerVersion": 0.01,
            "ServerDescription": "Aki's Server",
            "ServerRoot": 'https://blog.murphyspolaris.icu/',
            "Avatar": "https://hkngrok.murphyspolaris.icu/File/avatar.webp",
            "PostInfo": {
                "number": {
                    "post": 1,
                    "tag": 2,
                    "category": 1
                }
            },
            "Socials":[
                {
                    "link": 'https://github.com/murphys7017',
                    "icon": 'github'
                },
                {
                    "link": 'mailto:Yuki7017@outlook.com',
                    "icon": 'email'
                }
            ],
            "Menus": {

            },
            "CoverImages": [
                'https://hkngrok.murphyspolaris.icu/File/-781c4e03c89f9fa5.webp',
                'https://hkngrok.murphyspolaris.icu/File/0146690c71602f456b89e1b688c93bfe328597.jpg%401036w.webp',
                'https://hkngrok.murphyspolaris.icu/File/a4fc8c7d98330a06d16acfc237bedfce328597.webp',
                'https://hkngrok.murphyspolaris.icu/File/bf0be63881IqXKX.webp'
            ]
        }
