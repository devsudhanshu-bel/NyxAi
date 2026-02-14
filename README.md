# NyxAI

NyxAI is a generative AI-powered SaaS platform that enables users to securely access and interact with AI-driven tools through a unified web interface. The platform combines authentication, scalable backend infrastructure, and third-party AI integrations into a production-ready application.

NyxAI demonstrates how generative AI services can evolve from standalone APIs into structured, deployable SaaS products.

---

## The Problem

Generative AI tools are powerful but fragmented. Most solutions exist as isolated APIs without structured authentication, persistent storage, or scalable backend architecture.

Users and developers need:

- Secure access to AI features  
- Centralized user management  
- Persistent cloud storage  
- Clean and scalable system design  

NyxAI addresses this gap.

---

## The Solution

NyxAI integrates multiple AI services into a cohesive SaaS model with:

- Secure authentication and session management  
- AI-powered text generation  
- AI-powered image generation  
- Cloud-based media storage  
- Persistent relational database  
- Production-ready deployment  

The system is structured to simulate real-world SaaS architecture and deployment practices.

---

## Core Features

- Secure login and user management via Clerk  
- Text generation using Gemini API  
- Image generation using ClipDrop API  
- Image storage using Cloudinary  
- PostgreSQL (Neon) database integration  
- Modular client-server architecture  
- Production deployment on Vercel  

---

## System Workflow

1. User authenticates using Clerk.
2. Frontend sends authenticated request to backend.
3. Backend validates session token.
4. Backend routes request to selected AI service.
5. AI API processes input and returns output.
6. Images are stored in Cloudinary when applicable.
7. User data and activity are stored in PostgreSQL.
8. Response is rendered dynamically in the UI.

---

## Tech Stack

### Frontend
- React.js  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  
- REST APIs  

### Database
- PostgreSQL (Neon Database)  

### Cloud & Integrations
- Gemini API (Text Generation)  
- ClipDrop API (Image Generation)  
- Cloudinary (Image Storage)  
- Clerk (Authentication & User Management)  
- Vercel (Deployment)  
- Postman (API Testing)  

---

## What I Learned

- Designing SaaS-style authentication systems  
- Structuring scalable REST API architecture  
- Integrating third-party AI services into backend workflows  
- Managing asynchronous API handling  
- Implementing cloud-based storage pipelines  
- Deploying full-stack applications to production environments  
- Thinking in terms of product architecture rather than isolated features  

---

## Future Improvements

- Role-based access control  
- Usage-based subscription logic  
- API rate limiting and quotas  
- Usage analytics dashboard  
- CI/CD pipeline automation  
- Performance optimization and caching  

---

## Running the Project Locally

### Clone Repository

```bash
git clone https://github.com/devsudhanshu-bel/NyxAi.git
cd NyxAi
```

---

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server directory and configure:

```
DATABASE_URL=
CLERK_SECRET_KEY=
GEMINI_API_KEY=
CLIPDROP_API_KEY=
CLOUDINARY_API_KEY=
```

Start backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The application will run locally with both frontend and backend environments configured.

---

## Deployment

NyxAI is deployed on Vercel with environment variables securely configured in production settings.
