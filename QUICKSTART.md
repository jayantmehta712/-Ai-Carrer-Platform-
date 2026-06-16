# Career AI Platform - Quick Start

## 1. Start the Backend

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

Health check:

```text
http://localhost:5000/api/health
```

## 2. Start the Frontend

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

## 3. Build Checks

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

## Project Overview

This is a full-stack TypeScript career guidance platform.

- Frontend: React, Vite, TypeScript, CSS.
- Backend: Node.js, Express, TypeScript.
- API: career recommendations and skill-gap analysis.

## Future Improvements

- Add authentication.
- Store user career profiles.
- Connect the recommendation service to a production AI provider.
- Add unit and integration tests.
