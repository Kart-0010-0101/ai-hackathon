from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload_notes")
async def upload_notes(file: UploadFile = File(None), text: str = Form(None)):
    if file:
        print(f"[UPLOAD] Received file: {file.filename}")
    if text:
        print(f"[UPLOAD] Received text: {text[:100]}" if len(text) > 100 else f"[UPLOAD] Received text: {text}")
    # For now, just return a success message
    return {"message": "Received", "filename": file.filename if file else None, "text": text}
