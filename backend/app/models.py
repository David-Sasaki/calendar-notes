from pydantic import BaseModel, Field
from typing import List, Optional

class NoteBase(BaseModel):
    date: str
    notes: List[str]

class NoteCreate(NoteBase):
    pass

class NoteUpdate(BaseModel):
    notes: List[str]

class NoteInDBBase(NoteBase):
    id: Optional[str] = Field(None, alias="_id")

    class Config:
        orm_mode = True
