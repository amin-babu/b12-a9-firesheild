# SkillSwap - A Skill Sharing Platform

An interactive platform where users can learn, share, and trade skills within their local community. Whether it's coding, music, cooking, fitness, or language exchange — users can browse skill listings, explore providers, and connect with skilled individuals.

---

## 🌐 Live URL
Live Site: https://b12-a09-skillswap.netlify.app/

---

## 🎯 Purpose
The purpose of SkillSwap is to bring learners and skill providers into one place, helping people improve their abilities, offer their talents, and build real connections through skill exchange.

---

## ✨ Key Features
- ✅ User Authentication (Email/Password, Google Login)
- ✅ Protected Routes for Private Pages
- ✅ Dynamic Skill Listing and Skill Details Page
- ✅ Top Rated Providers Section
- ✅ Success Toast Messages for Better UX
- ✅ Responsive UI for Mobile, Tablet & Desktop
- ✅ 404 Error Page & Reset Password Feature
- ✅ Auto-Fill Email on Forget Password Page
- ✅ Private Route Redirect After Login

---

## 🚀 Technologies Used
**Frontend:**
- React.js
- React Router
- Tailwind CSS
- Firebase Authentication
- AOS Animation
- DaisyUI

---

## 📦 Dependencies

```json
"dependencies": {
    "@tailwindcss/vite": "^4.1.15",
    "aos": "^2.3.4",
    "firebase": "^12.4.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.15"
  }
```

---

## 🚀 How to Run This Project Locally

Follow the steps below to set up and run the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/amin-babu/b12-a9-firesheild.git
cd b12-a9-firesheild
npm install
```

### 2️⃣ Environment Setup (.env)

Create a new file named **.env.local** in the root of the project and paste the following configuration:

```env
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

### 3️⃣ Start the Development Server
```
npm run dev
```

Now open the project in your browser at:
👉 http://localhost:5173