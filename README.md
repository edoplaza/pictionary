🎨 Pictionary

A simple local multiplayer **Pictionary** game built with:

- ✨ React, TypeScript, and Tailwind CSS (frontend)
- ⚙️ FastAPI (backend)

---

## 📁 Project Structure

pictionary/
├── src/         # React + Vite frontend
├── backend/     # FastAPI backend
└── README.md

---

## 🚀 Getting Started

### 🔧 Requirements

- Node.js ≥ 18
- Python ≥ 3.9
- `pip` and `venv`

---

### 🖥️ Frontend Setup (React + Vite)

# 1. Navigate to the project root
cd pictionary

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

> App will be available at: http://localhost:5173

---

### 🔙 Backend Setup (FastAPI)

# 1. Navigate to the backend folder
cd backend

# 2. Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. (Optional) Copy the .env template
cp .env.example .env

# 5. Run the API server
uvicorn main:app --reload --port 8000

> API will be available at: http://localhost:8000

---

## 📘 API Reference

| Method | Endpoint     | Description            |
|--------|--------------|------------------------|
| GET    | /word        | Fetch the current word |
| POST   | /guess       | Submit a guess         |
| POST   | /new-word    | Fetch a new word       |

---

## 🧼 Code Quality Tools

### Format with Prettier
npm run format
npm run format:check

### Lint with ESLint
npm run lint
npm run lint:fix

### Type Checking (TypeScript)
npm run type-check
npm run type-check:watch

### All-in-One Quality Check
npm run check

---

## 🌱 Environment Variables

### .env.example

# Frontend
VITE_API_URL=http://localhost:8000

# Backend (unused for now)
SECRET_KEY=dev-placeholder-key

> No secrets are required to run the app locally. This is included for potential future use.

---

## 🧭 Next Steps (Ideas for Extension)

- ✅ User authentication
- 🔁 Real-time multiplayer using WebSockets
- ☁️ Deployment via Vercel (frontend) & Railway or Render (backend)

---

## 📄 License

This project is licensed under the MIT License. See LICENSE for details.
