<div align="center">
  <img src="client/src/assets/logo.svg" alt="Wheelora Logo" width="120"/>
  <h1>Wheelora</h1>
  <p><b>Modern Car Rental Platform &mdash; MERN Stack</b></p>
  <p>Book, list, and manage cars with a seamless, mobile-first experience.</p>
  <br/>
  <a href="https://wheelora.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/Live%20Demo-Wheelora-blue?style=flat-square"/></a>
  <br/>
  <a href="#features"><img src="https://img.shields.io/badge/Features-Dark%20Theme-blueviolet?style=flat-square"/></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Stack-MERN-green?style=flat-square"/></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square"/></a>
</div>

---

## 🚀 Overview

**Wheelora** is a full-stack car rental web app with a beautiful dark UI, responsive design, and robust features for both renters and car owners. Built for performance, security, and ease of use.

---

## ✨ Features

- **Browse & Book Cars:** Search, filter, and reserve premium vehicles
- **Date-based Booking:** Intuitive pick-up and return date selection
- **Owner Portal:** List, manage, and monetize your cars
- **User & Owner Dashboards:** Personalized experiences for both roles
- **Authentication:** Secure login and booking management
- **Mobile-First:** Fully responsive, works on all devices
- **Modern UI:** Dark theme, smooth animations, and accessibility

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Framer Motion, Axios, React Hot Toast
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Cloudinary, Multer, CORS, Dotenv, Bcrypt
- **Deployment:** Vercel (client & server)

---

## 📦 Project Structure

```
Wheelora/
  client/         # React frontend (Vite, Tailwind)
    src/
      components/
      pages/
      assets/
      context/
    ...
  server/         # Express backend (API, MongoDB)
    models/
    routes/
    controller/
    config/
    ...
```

---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Arbaz1506/Wheelora.git
cd Wheelora
```

### 2. Install Dependencies
```bash
cd server && npm install
cd ../client && npm install
```

### 3. Environment Variables
- Create `.env` files in both `client/` and `server/` (see example below)
- **Never share secrets publicly!**

### 4. Run Locally
```bash
cd server && npm run dev
cd ../client && npm run dev
```
Visit [http://localhost:5173](http://localhost:5173)

---

## 📝 Example .env (Do NOT share real secrets)

**server/.env**
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**client/.env**
```
VITE_API_URL=http://localhost:5000
VITE_CURRENCY=₹
```

---

## 🌐 Deployment
- Ready for Vercel deployment (see `client/vercel.json` and `server/vercel.json`)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

- [Arbaz Salam](https://github.com/Arbaz1506)

---

<div align="center">
  <sub>Made with ❤️ for modern mobility</sub>
</div>
