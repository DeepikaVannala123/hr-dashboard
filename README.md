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

** Architecture Overview**
The HR dashboard is divided into frontend and backend services.

Frontend (React + MUI)
Role-based dynamic routing:
Users are routed to Admin or Employee based on login.

Dashboard layout:

Company Switcher: A dropdown to switch between tenant companies.

Summary Cards: Displays 4 KPIs: Total Employees, Attendance, Leave Requests, Payroll Time.

Employee Table: Lists employees with a "View" button that opens a modal.

Modal View:

Pie chart of used vs remaining leaves

Table of leave types with used and remaining days

Charts:

Department-wise leave utilization (Pie Chart)

Department-wise headcount (Bar Chart)

Announcements Feed: Company announcements listed.

Backend (Node + Express)
Mock API routes for:

/api/:company/employees

/api/:company/announcements

/api/tenants

Serves static mock data to simulate multi-tenancy.

State Management
Context API used for global state: selected company, auth, etc.

** Trade-offs & Future Improvements**
🧪 Trade-offs
Mock Data Only: No database integration; all data is mocked via JSON files for speed and demo simplicity.

Hardcoded Auth: Role and user are hardcoded; no real login flow.

API Endpoint Static: Frontend API base URL is hardcoded (http://localhost:5000), not environment-based.


**Future Improvements**
- Add real authentication & JWT-based auth

- Integrate with a real database (MongoDB, PostgreSQL)

- Add filters for date ranges, departments

- More granular charts (e.g., attendance trends)

- Export data (CSV/PDF)

- Add i18n for multilingual support

- Add caching or debounce on company switch to avoid unnecessary calls

- UI refinements with dark mode toggle
