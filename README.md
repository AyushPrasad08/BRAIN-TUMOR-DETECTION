# Brain Tumor Detection — Frontend + FastAPI Boilerplate

This repository contains a frontend React + TypeScript application scaffold and a FastAPI backend boilerplate with mock endpoints for a Brain Tumor Detection web application.

Features included (frontend):
- React + TypeScript
- Tailwind CSS configured
- Framer Motion for animations
- React Query for data fetching (mocked)
- Context API for theme & auth
- Headless UI where applicable
- Left collapsible sidebar with tooltips, dark mode, responsive behavior
- Four main pages: Dashboard, Upload, History, About
- Mock services in services/mockData.ts
- Accessibility and loading skeletons

Backend (fastapi):
- FastAPI app with mock endpoints: /api/analyze, /api/history, /api/patient/{id}, /api/stats, /api/auth/login

Quick start
1. Frontend
   - cd frontend
   - npm install
   - npm run dev

2. Backend
   - cd backend
   - python -m venv .venv
   - source .venv/bin/activate
   - pip install -r requirements.txt
   - uvicorn app.main:app --reload

Project structure

src/
├── components/
├── pages/
├── services/
├── context/
├── hooks/
├── styles/
├── types/

See the frontend and backend folders for full structure.
