from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

# ───────────────
# CORS Fix
# ───────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # your original
        "http://localhost:5174",  # your current Vite port
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ────────────────────────────────────────────
# In-memory “database”
# ────────────────────────────────────────────
WORDS        = ["apple", "house", "guitar", "moon", "pizza", "dog"]
current_word = random.choice(WORDS)        # pick one at start-up


# ────────────────────────────────────────────
# API models
# ────────────────────────────────────────────
class GuessIn(BaseModel):
    guess: str


# ────────────────────────────────────────────
# Endpoints
# ────────────────────────────────────────────
@app.get("/")
async def root():
    return {"message": "Welcome to Pictionary API"}

@app.get("/word")
async def get_word():
    """
    Returns the current word.  
    (For a real multi-player game you’d hide this from guessers.)
    """
    return {"word": current_word}

@app.post("/guess")
async def post_guess(payload: GuessIn):
    """
    Check a guess. Returns whether it's correct.
    """
    is_correct = payload.guess.strip().lower() == current_word.lower()
    return {"correct": is_correct}

@app.post("/new-word")
async def new_word():
    """
    Rotate to a new random word and return it (for the drawer).
    """
    global current_word
    current_word = random.choice(WORDS)
    return {"word": current_word}


# ────────────────────────────────────────────
# Local dev entry-point (optional)
# ────────────────────────────────────────────
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
