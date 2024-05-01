from dotenv import load_dotenv
import os

class Settings:
    load_dotenv()

    DATABASE_URL: str = os.getenv("DATABASE_URL")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME")

settings = Settings()
