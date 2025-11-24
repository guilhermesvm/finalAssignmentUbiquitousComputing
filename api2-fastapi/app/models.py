import os
from sqlalchemy import Column, Integer, String
from .database import Base

SCHEMA = os.environ.get("SCHEMA", "api_default_schema")

class User(Base):
    __tablename__ = "users"
    __table_args__ = {"schema": SCHEMA}

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    user = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)  # hashed password
