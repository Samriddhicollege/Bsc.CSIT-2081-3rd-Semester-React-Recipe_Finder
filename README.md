# 🍽️ Recipe Finder App

> "A simple React app that helps you find, save and personalise your favourite recipes — because good food deserves to be remembered."

---

## 📌 Project Overview

Recipe Finder App is a React-based web application that allows users to search for recipes using the TheMealDB API. Users can save their favourite recipes using a heart icon, add personal notes to saved recipes, and view full cooking instructions — all with localStorage persistence.

---

## ✨ Features

- 🔍 Search recipes by name using TheMealDB API
- ❤️ Add or remove recipes from favourites using a heart icon
- 📝 Add and save personal notes to favourited recipes
- 💾 Favourites and notes persist using localStorage
- ⚠️ Input validation — empty search is blocked
- 📖 View full cooking instructions expanded on the same page

---

## 🛠️ Technologies Used

- React 19
- JavaScript ES6+
- HTML & CSS
- Vite
- TheMealDB API (free, no API key required)
- localStorage

---

## 📁 Project Structure
```
src/
  ├── Components/
  │     ├── Button.jsx
  │     ├── Header.jsx
  │     ├── Logo.jsx
  │     ├── RecipeCard.jsx
  │     ├── RecipeList.jsx
  │     └── SearchBar.jsx
  ├── hooks/
  │     └── useFavorites.jsx
  ├── App.jsx
  ├── App.css
  ├── index.css
  └── main.jsx
```

---

## ⚛️ React Concepts Covered

- Component Architecture — 7 reusable components
- useState — dynamic data management
- useEffect — localStorage read and write
- Props — parent to child communication
- Custom Hook — useFavorites
- API Handling — fetch with async/await
- CRUD Operations — Create, Read, Update, Delete
- Conditional Rendering — loading and error states
- List Rendering — .map() with unique keys
- Basic Validation — empty search blocked

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/recipe-finder.git
```

2. Navigate to the project folder
```bash
cd recipe-finder
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and go to
```
http://localhost:5173
```

---

## 🌐 API Used

- **Name:** TheMealDB API
- **Website:** https://www.themealdb.com
- **Cost:** Free — no API key required
- **Endpoint:** `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`

---

## 📦 CRUD Operations

| Operation | Where |
|---|---|
| ✅ Create | Click heart → add recipe to favourites |
| ✅ Read | Search → fetch and display recipes from API |
| ✅ Update | Type and save personal note on favourited recipe |
| ✅ Delete | Click red heart again → remove from favourites |

---

## 💡 Challenges Faced

- Favourites resetting on page refresh — fixed using useRef to skip first render
- Heart icon not syncing between search results and favourites — fixed by passing favorites array to both lists
- Remove button bug — fixed by passing full recipe object instead of just id

---

## 🔮 Future Improvements

- Add user authentication and login
- Connect to a backend to store data online
- Add recipe categories and filters
- Add star rating system
- Make fully responsive for mobile
- Deploy online using Netlify or Vercel

---

## 👨‍💻 Author

- **Name:** Prajwol Shrestha
- **Course:** React Development
- **Instructor:** Dipak Shrestha

---

## 📄 License

This project is for educational purposes only.