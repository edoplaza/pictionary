🎨 Pictionary

A simple local multiplayer **Pictionary** game built with:

- ✨ React, TypeScript, and Tailwind CSS (frontend)
- ⚙️ FastAPI (backend)

> ⚠️ This project is submitted as a ZIP file, not a Git repository. Please extract it before proceeding.

📁 Project Structure

pictionary/
├── src/   # React + Vite
└── backend/    # FastAPI

🚀 Getting Started

🔧 Requirements

- Node.js ≥ 18
- Python ≥ 3.9
- pip and venv

🖥️ Frontend Setup (React + Vite)

1. Navigate to the root

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Visit the app at: http://localhost:5173

🔙 Backend Setup (FastAPI)

1. Navigate to the backend folder:
   cd backend

2. Create and activate a virtual environment:
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate

3. Install dependencies:
   pip install -r requirements.txt

4. (Optional) Create your .env file:
   cp .env.example .env

5. Start the API server:
   uvicorn main:app --reload --port 8000

6. API will be available at: http://localhost:8000

📘 API Reference

| Method | Endpoint     | Description            |
|--------|--------------|------------------------|
| GET    | /word        | Fetch the current word |
| POST   | /guess       | Submit a guess         |
| POST   | /new-word    | Fetch a new word       |


⚙️ Code Quality Tools


🧼 Format with Prettier
npm run format
npm run format:check

🧹 Lint with ESLint
npm run lint
npm run lint:fix

🧠 Type Checking
npm run type-check
npm run type-check:watch

✅ All-in-One Quality Check
npm run check

🌱 Example .env.example

# Frontend
VITE_API_URL=http://localhost:8000

# Backend
SECRET_KEY=dev-placeholder-key

> No secrets are currently required. This is prepared for future use.

🧭 Next Steps (Ideas for Extension)

- ✅ User authentication
- 🔁 Real-time multiplayer using WebSockets
- ☁️ Deployment via Vercel (frontend) & Railway or Render (backend)

📄 License

This project is licensed under the MIT License. See LICENSE for more info.
