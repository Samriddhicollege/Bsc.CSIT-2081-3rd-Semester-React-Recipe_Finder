import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, title, onToggleFavorite, favorites, emptyMessage, onUpdateNote }) => {

  if (recipes.length === 0) {
    return (
      <div className="list-section">
        <h2>{title}</h2>
        <p>{emptyMessage || "No recipes to display. Try searching for something delicious!"}</p>
      </div>
    );
  }

  return (
    <div className="list-section">
      <h2>{title}</h2>
      <div
        className="recipe-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.some(f => f.idMeal === recipe.idMeal)}
            onUpdateNote={onUpdateNote}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;