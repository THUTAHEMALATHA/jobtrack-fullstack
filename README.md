# JobTrack – Full Stack Job Application Tracker

## Overview

JobTrack is a full-stack web application that helps users manage and track their job applications securely.

Users can register, log in, and manage their job applications with full CRUD functionality. Each user can access only their own data using JWT-based authentication and protected routes.

---

## Features

- User Signup & Login
- JWT Authentication
- Protected Routes
- Add Job Applications
- Update Application Status
- Delete Applications
- Filter by Status
- Search by Company
- Profile Page
- Secure Backend APIs
- Supabase (PostgreSQL) Integration

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- Supabase (PostgreSQL)
- JWT Authentication
- bcrypt Password Hashing
- CORS Configuration

---

## Architecture

Frontend → Express API → Supabase Database

Authentication Flow:
1. User logs in
2. Backend generates JWT
3. Token stored in localStorage
4. Protected routes verify token
5. User-specific data fetched from database

---

## Installation (Local Setup)

### 1️⃣ Clone Repository

git clone <your-repo-url>

---

### 2️⃣ Backend Setup

cd jobtrack-backend
npm install
npm run dev


Create `.env` file:

SUPABASE_URL=your_value
SUPABASE_KEY=your_value
JWT_SECRET=your_value

---

### 3️⃣ Frontend Setup

cd jobtrack-frontend
npm install
npm run dev

---

## Environment Variables (Backend)

SUPABASE_URL
SUPABASE_KEY
JWT_SECRET

---

## Deployment

- Backend: Render
- Frontend: Vercel

---

## Screenshots

(Add screenshots here)

---

## Author

Your Name  
Full Stack Developer
---
🔥 If Using Single Repo

Add this section at top:
## Project Structure

jobtrack/
│
├── jobtrack-frontend/
└── jobtrack-backend/

