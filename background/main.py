from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
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
            "ServerName": "Aki's Server",
            "Avatar": "https://hkngrok.murphyspolaris.icu/File/avatar.webp",
            "outLinks":{
                "Github": {
                    "link": 'https://github.com/murphys7017',
                    "icon": 'github'
                },
            }
        }
