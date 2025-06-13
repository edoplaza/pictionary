# Pictionary

This project is a simple Pictionary game built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pictionary
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Code Quality Tools

### Prettier

Prettier is used to format the codebase. To format all files, run:
```bash
npm run format
```

To check if files are formatted correctly (useful for CI), run:
```bash
npm run format:check
```

### ESLint

ESLint is used to lint the codebase. To lint all files, run:
```bash
npm run lint
```

To automatically fix linting issues, run:
```bash
npm run lint:fix
```

### Type Checking

To check for TypeScript errors, run:
```bash
npm run type-check
```

To watch for TypeScript errors during development, run:
```bash
npm run type-check:watch
```

### All-in-One Check

To run all checks (type checking, linting, and Prettier), run:
```bash
npm run check
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Project Structure

pictionary/
├── frontend/ # React + Vite
└── backend/ # FastAPI

## Requirements

- Node.js ≥ 18
- Python ≥ 3.9
- pip and venv installed

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/your-username/pictionary.git
   cd pictionary

2. Setup the backend (FastAPI):

   cd backend
   python3 -m venv venv
   source venv/bin/activate # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload --port 8000

   (Optional) Create .env file:

   cp .env.example .env

3. Setup the frontend (React + Vite):

   cd frontend
   npm install
   npm run dev

   The app will run at: http://localhost:5173

## API Endpoints

| Method | Endpoint  | Description      |
| ------ | --------- | ---------------- |
| GET    | /word     | Get current word |
| POST   | /guess    | Submit a guess   |
| POST   | /new-word | Get a new word   |

## Environment Variables

No secrets are required yet. But to prepare for future additions:

## Example .env.example:

# Frontend (Vite)

VITE_API_URL=http://localhost:8000

# Backend (FastAPI)

SECRET_KEY=dev-placeholder-key

## Next Steps

- Add user auth / persistent game state
- Add real-time multiplayer (WebSocket support)
- Deploy via Vercel (frontend) and Railway / Render (backend)
