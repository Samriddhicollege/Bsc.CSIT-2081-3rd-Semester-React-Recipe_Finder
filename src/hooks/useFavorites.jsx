import { useState, useEffect, useRef } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const isFirstRender = useRef(true); 

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recipe-app-favs'));
    if (saved) setFavorites(saved);
  }, []);

 
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; 
      return; 
    }
    localStorage.setItem('recipe-app-favs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    setFavorites(prev =>
      prev.some(f => f.idMeal === recipe.idMeal)
        ? prev.filter(f => f.idMeal !== recipe.idMeal)
        : [...prev, { ...recipe, note: "" }]
    );
  };

  const updateNote = (idMeal, note) => {
    setFavorites(prev =>
      prev.map(f => f.idMeal === idMeal ? { ...f, note } : f)
    );
  };

  return { favorites, toggleFavorite, updateNote };
};

export default useFavorites;