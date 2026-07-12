# 🚛 TransitOps – Smart Transport Operations Platform

## 📌 Overview

TransitOps is a MERN Stack based Smart Transport Operations Platform developed during a Hackathon. The platform helps organizations efficiently manage their fleet operations by handling vehicles, drivers, trips, maintenance, fuel consumption, expenses, authentication, and analytics from a single dashboard.

---

# ✨ Features

## 🔐 Authentication
- User Signup
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role Based Access Control (RBAC)

### Supported Roles
- Fleet Manager
- Driver
- Safety Officer
- Financial Analyst

---

## 🚚 Vehicle Management

- Add Vehicle
- View Vehicles
- Unique Registration Number
- Vehicle Status Management
- Capacity Management

---

## 👨‍✈️ Driver Management

- Add Driver
- View Drivers
- License Management
- Driver Status
- Contact Information

---

## 🛣 Trip Management

- Create Trips
- Assign Vehicle
- Assign Driver
- Source & Destination
- Cargo Weight
- Trip Status
- Start & End Date

---

## 🛠 Maintenance Management

- Create Maintenance Record
- Vehicle Maintenance Status
- Repair Cost
- Maintenance Schedule

---

## ⛽ Fuel Management

- Fuel Logs
- Fuel Cost
- Fuel Consumption Tracking

---

## 💰 Expense Management

- Vehicle Expenses
- Repair Expenses
- Expense Categories
- Expense Reports

---

## 📊 Dashboard

Dashboard provides:

- Total Vehicles
- Available Vehicles
- Vehicles in Maintenance
- Active Trips
- Available Drivers
- Fleet Utilization
- Overall Statistics

---

## 📈 Reports

- Fuel Reports
- Maintenance Reports
- Expense Reports
- Fleet Summary
- Vehicle Utilization

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS

---

# 📂 Project Structure

```text
TransitOps-Smart-Transport-Operations-Platform
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── auth
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/your-repository.git
```

---

## Install Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Install Backend

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# 🌍 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/signup |
| POST | /api/auth/login |
| GET | /api/auth/me |

---

## Vehicles

| Method | Endpoint |
|---------|----------|
| GET | /api/vehicles |
| POST | /api/vehicles |

---

## Drivers

| Method | Endpoint |
|---------|----------|
| GET | /api/drivers |
| POST | /api/drivers |

---

## Trips

| Method | Endpoint |
|---------|----------|
| GET | /api/trips |
| POST | /api/trips |

---

## Maintenance

| Method | Endpoint |
|---------|----------|
| GET | /api/maintenance |
| POST | /api/maintenance |

---

## Fuel

| Method | Endpoint |
|---------|----------|
| GET | /api/fuel |
| POST | /api/fuel |

---

## Expenses

| Method | Endpoint |
|---------|----------|
| GET | /api/expenses |
| POST | /api/expenses |

---

## Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard |

---

## Reports

| Method | Endpoint |
|---------|----------|
| GET | /api/reports |

---

# 🗄 Database Collections

- Users
- Vehicles
- Drivers
- Trips
- Maintenance
- FuelLogs
- Expenses

---

# 🔒 Security

- JWT Authentication
- Password Hashing
- Role-Based Access Control
- Protected APIs
- MongoDB Atlas Cloud Database

---

# 🚀 Future Enhancements

- Live GPS Tracking
- AI Route Optimization
- Predictive Vehicle Maintenance
- Fuel Consumption Analytics
- Driver Performance Dashboard
- Real-Time Notifications

---

# 👨‍💻 Team

**TransitOps Hackathon Team**

Developed as part of a Hackathon using the MERN Stack.

---

# 📄 License

This project is developed for educational and hackathon purposes.
