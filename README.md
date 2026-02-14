# NyxAI

NyxAI is a full-stack SaaS AI application that enables users to authenticate securely and access multiple AI-powered features through a modern web interface. The platform integrates generative AI APIs for response generation and image processing, built with a scalable backend architecture and deployed in a production-ready environment.

The system is designed to simulate a real-world SaaS model with user authentication, API management, and cloud-based storage.

---

## Technologies

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- PostgreSQL (Neon Database)

### Cloud & Services
- Cloudinary (Image Storage)
- Gemini API (Text Generation)
- ClipDrop API (Image Generation)
- Clerk (Authentication & User Management)
- Vercel (Deployment)
- Postman (API Testing)

---

## Features

- Secure user authentication and session handling
- AI-powered text generation using Gemini API
- AI-powered image generation via ClipDrop
- Cloud-based image storage using Cloudinary
- Persistent data storage using PostgreSQL
- RESTful API architecture
- Production deployment on Vercel
- Clean responsive UI with Tailwind CSS
- Modular client-server separation

---

## System Architecture & Process

1. User registers or logs in via Clerk authentication.
2. Authenticated session token is verified on the backend.
3. User selects AI feature (text or image generation).
4. Backend processes request and calls respective AI API.
5. Generated output is returned to frontend.
6. Images are stored in Cloudinary if required.
7. User activity and data are stored in PostgreSQL.
8. Response is rendered dynamically in the UI.

The architecture follows a clear separation of concerns between client and server, ensuring scalability and maintainability.

---

## What I Learned

- Implementing secure authentication flows in SaaS applications
- Integrating third-party AI APIs into backend pipelines
- Handling asynchronous API requests efficiently
- Structuring scalable REST API architecture
- Managing cloud storage workflows
- Deploying full-stack applications in production
- Optimizing frontend-backend communication

---

## Overall Growth

This project strengthened my understanding of building end-to-end AI-driven SaaS systems. It improved my backend structuring skills, API integration strategies, and deployment practices. I gained practical exposure to production-level architecture decisions and real-world system design thinking.

---

## Future Improvements

- Implement role-based access control
- Add usage-based subscription logic
- Introduce rate limiting and API quotas
- Improve caching strategies
- Add analytics dashboard
- Implement CI/CD pipelines
- Enhance UI animations and performance optimization

---

## Running the Project Locally

### Clone the repository

```bash
git clone https://github.com/devsudhanshu-bel/NyxAi.git
cd NyxAi
