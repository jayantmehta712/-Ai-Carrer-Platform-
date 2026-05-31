# Career AI Platform

A modern AI-powered career guidance platform that provides personalized career recommendations and skill gap analysis.

## Project Structure

```
career-ai-platform/
├── frontend/                 # React + TypeScript + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript type definitions
│   │   ├── styles/         # CSS styles
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main App component
│   │   └── main.tsx        # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── index.html
│
├── backend/                  # Node.js + Express + TypeScript backend
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Route controllers
│   │   ├── services/       # Business logic services
│   │   ├── models/         # Data models and types
│   │   ├── middleware/     # Express middleware
│   │   ├── utils/          # Utility functions
│   │   └── index.ts        # Server entry point
│   ├── dist/               # Compiled JavaScript
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example        # Environment variables template
│   └── .gitignore
│
├── .gitignore              # Git ignore file
└── README.md              # This file
```

## Features

- 🤖 **AI-Powered Recommendations**: Get personalized career path suggestions based on your profile
- 🎯 **Skill Gap Analysis**: Identify missing skills and get a development roadmap
- 💼 **Career Insights**: Detailed reasoning for each recommendation
- 🚀 **Real-time Processing**: Fast analysis using modern AI models
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation build tool
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe server code
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment configuration

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd career-ai-platform
```

2. **Setup Backend**
```bash
cd backend

# Install dependencies
npm install

# Create .env file from template
cp .env.example .env

# Edit .env with your configuration
# PORT=5000
# NODE_ENV=development
# DATABASE_URL=mongodb://localhost:27017/career-ai
# JWT_SECRET=your_jwt_secret_key_here
# OPENAI_API_KEY=your_openai_api_key_here
# FRONTEND_URL=http://localhost:5173
```

3. **Setup Frontend**
```bash
cd ../frontend

# Install dependencies
npm install

# Create .env.local file
echo "VITE_API_BASE_URL=http://localhost:5000" > .env.local
```

### Running the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
# Server will run on http://localhost:5000
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
# App will run on http://localhost:5173
```

## API Endpoints

### Health Check
```
GET /api/health
```

### Career Recommendations
```
POST /api/career/recommendations
Content-Type: application/json

Body:
{
  "skills": ["JavaScript", "React", "Node.js"],
  "experience": "5",
  "interests": ["AI", "Web Development"]
}
```

### Skill Gap Analysis
```
POST /api/career/skill-gap
Content-Type: application/json

Body:
{
  "userSkills": ["JavaScript", "React"],
  "targetCareer": "Full Stack Developer"
}
```

## Development

### Backend Development
```bash
cd backend

# Start dev server with hot reload
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start

# Clean build files
npm run clean
```

### Frontend Development
```bash
cd frontend

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/career-ai
JWT_SECRET=your_jwt_secret_key_here
OPENAI_API_KEY=your_openai_api_key_here
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env.local)
```
VITE_API_BASE_URL=http://localhost:5000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@careeraiplatform.com or open an issue in the repository.

---

**Last Updated**: June 2024
