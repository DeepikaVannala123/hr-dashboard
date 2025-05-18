# 🌐 Multi-Tenant HR Dashboard

HR Dashboard for a hypothetical company with multi-tenant support.
---
A scalable HR dashboard with dynamic company switching — built using **React**, **Material UI**, **Highcharts**, and **Express.js**. Supports role-based access, real-time UI updates, and containerized deployment via Docker
## 🚀 Features

- 🔄 Company switcher with live metrics
- 👥 Employee list with leave summaries
- 📢 Announcements feed
- 📊 Department-wise leave utilization chart
- 📈 Headcount growth visualizations
- 🔐 Role-based route protection (Admin/Employee)
- 🧪 Mock backend via Express REST API

---

## 🧱 Tech Stack

**Frontend**
- React + TypeScript
- Redux + Redux-Saga
- Material UI (MUI)
- Context API for global state
- Highcharts for visualizations
- React Router DOM

**Backend**
- Node.js + Express.js
- Mock data served via REST APIs

**DevOps**
- Docker + Docker Compose

---

## 📦 Local Installation

### 1. Clone the Repository

```bash
git clone https://github.com/DeepikaVannala123/hr-dashboard
cd hr-dashboard

### 2. Setup Backend Manually
cd backend
npm install
npm run dev


### 3. Setup Frontend Manually
cd backend
npm install
npm start

### Docker Setup
1. Build & Start Containers
From the project root:
Run this command: docker compose up --build (start all the services)

2. Access the App
Frontend: http://localhost:3000

Backend API: http://localhost:5000

3. Stop the Containers
docker compose down

📌 Notes
Please, Ensure Docker is installed: https://www.docker.com/products/docker-desktop

Frontend connects to backend server at http://localhost:5000 — this is hardcoded;

All data is mocked (no real DB)
