# Career AI Platform

A full-stack career guidance application with a React frontend and Node.js/Express backend. It generates career recommendations and skill-gap analysis from a user's skills, experience, interests, and target role.

## Features

- Career profile form for skills, experience, interests, and target career.
- Backend health check endpoint.
- Career recommendation API.
- Skill-gap analysis API.
- Responsive React frontend with a clean interview-ready interface.
- TypeScript builds for both frontend and backend.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | React, TypeScript, Vite, CSS |
| Backend | Node.js, Express, TypeScript |
| API | REST JSON endpoints |

## Project Structure

```text
career-ai-platform/
  backend/
    src/
      controllers/
      routes/
      services/
      index.ts
    package.json
    tsconfig.json
  frontend/
    src/
      App.tsx
      App.css
      services/
      hooks/
      types/
    package.json
    vite.config.ts
  README.md
  QUICKSTART.md
```

## Backend Setup

```bash
cd backend
npm install
npm run build
npm start
```

Backend URL:

```text
http://localhost:5000
```

## Frontend Setup

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

If the backend runs on a different URL, create `frontend/.env.local`:

```text
VITE_API_BASE_URL=http://localhost:5000
```

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Check backend status |
| POST | `/api/career/recommendations` | Generate career recommendations |
| POST | `/api/career/skill-gap` | Analyze missing skills for a target career |

Example recommendation request:

```json
{
  "skills": ["JavaScript", "React", "Node.js"],
  "experience": "2",
  "interests": ["AI", "Web Development"]
}
```

## Verification

Backend:

```bash
cd backend
npm run build
```

Frontend:

```bash
cd frontend
npm run build
```

## Interview Talking Points

- Built a full-stack TypeScript app with separate frontend and backend.
- Designed reusable REST endpoints for recommendations and skill-gap analysis.
- Added strict TypeScript builds for both layers.
- Refactored the frontend into a polished responsive interface.
- Structured the project so it can be extended with a real AI provider later.
