from fastapi import FastAPI, HTTPException
from .models import NoteCreate, NoteInDBBase, NoteUpdate
from . import models, database
from typing import List
from bson import ObjectId

app = FastAPI()

@app.post("/notes/", response_model=models.NoteInDBBase)
def create_note(note: NoteCreate):
    new_note = database.db.notes.insert_one(note.dict()).inserted_id
    return models.NoteInDBBase(**note.dict(), id=str(new_note))

@app.get("/notes/{date}", response_model=List[models.NoteInDBBase])
def read_notes(date: str):
    try:
        notes_cursor = database.db.notes.find({"date": date})
        notes = list(notes_cursor)
        return [models.NoteInDBBase(**note) for note in notes]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/notes/{note_id}", response_model=models.NoteInDBBase)
def update_note(note_id: str, note: NoteUpdate):
    updated_result = database.db.notes.update_one({"_id": ObjectId(note_id)}, {"$set": note.dict()})
    if updated_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Note not found")
    updated_note = database.db.notes.find_one({"_id": ObjectId(note_id)})
    if updated_note is None:
        raise HTTPException(status_code=404, detail="Note not found after update")
    return models.NoteInDBBase(**updated_note)

@app.delete("/notes/{note_id}", response_model=dict)
def delete_note(note_id: str):
    delete_result = database.db.notes.delete_one({"_id": ObjectId(note_id)})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"message": "Note deleted"}
