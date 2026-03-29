import React, { useState } from 'react';
import Logo from './Components/Logo';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import RecipeList from './Components/RecipeList';
import useFavorites from './hooks/useFavorites';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const { favorites, toggleFavorite, updateNote } = useFavorites();

  const fetchRecipes = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
      if (!data.meals) setError("No recipes found. Try a different search!");
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Logo />
      <Header />
      <SearchBar onSearch={fetchRecipes} />

      {isLoading && <p className="status">Cooking up results...</p>}
      {error && <p className="status error">{error}</p>}

      {recipes.length > 0 && (
        <RecipeList
          recipes={recipes}
          title="Search Results"
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}

      <hr />

      <RecipeList
        recipes={favorites}
        title={`My Favorites (${favorites.length})`}
        onToggleFavorite={toggleFavorite}
        favorites={favorites}
        emptyMessage="No favorites yet. Search for recipes and save some!"
        onUpdateNote={updateNote}
      />
    </div>
  );
};

export default App;