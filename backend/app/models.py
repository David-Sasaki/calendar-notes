from pydantic import BaseModel, Field, validator
from typing import List, Optional
from bson import ObjectId

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
        allow_population_by_field_name = True
        json_encoders = {
            ObjectId: str
        }

    @validator('id', pre=True, allow_reuse=True)
    def convert_id(cls, v):
        return str(v)
