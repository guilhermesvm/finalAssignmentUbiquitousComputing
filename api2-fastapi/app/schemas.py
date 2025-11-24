from pydantic import BaseModel, EmailStr
from typing import Optional

class UserBase(BaseModel):
    name: str
    email: EmailStr
    user: str

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    user: Optional[str] = None
    password: Optional[str] = None

class UserRead(UserBase):
    id: int

    class Config:
        orm_mode = True
