import React, { useState } from 'react';

const RecipeCard = ({ recipe, onToggleFavorite, isFavorite, onUpdateNote }) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [note, setNote] = useState(recipe.note || "");
  const [noteSaved, setNoteSaved] = useState(false);

  const getSteps = (instructions) => {
    return instructions
      .split('.')
      .filter(step => step.trim().length > 0);
  };

  const handleNoteSave = () => {
    onUpdateNote(recipe.idMeal, note);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  return (
    <div className="recipe-card" style={{ position: 'relative' }}>

      {/* Heart icon */}
      <button
        className="heart-btn"
        onClick={() => onToggleFavorite(recipe)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(255,255,255,0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          cursor: 'pointer',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s',
        }}
        title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>

      
      {isFavorite && onUpdateNote && (
        <div style={{ marginTop: '8px' }}>
          <textarea
            placeholder="Add a personal note..."
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
              setNoteSaved(false);
            }}
            rows={2}
            style={{
              width: '100%',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '13px',
              resize: 'none',
              boxSizing: 'border-box',
            }}
          />
          <button
            onClick={handleNoteSave}
            style={{
              marginTop: '4px',
              padding: '4px 12px',
              backgroundColor: noteSaved ? '#4caf50' : '#64c7c7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'background-color 0.3s',
            }}
          >
            {noteSaved ? '✅ Saved!' : 'Save Note'}
          </button>
        </div>
      )}

      <button className="recipe-btn" onClick={() => setShowRecipe(!showRecipe)}>
        {showRecipe ? "Hide" : "View Full Recipe"}
        
      </button>

       

      {showRecipe && (
        <div className="recipe-details">
          <h4>Instructions:</h4>
          <ol className="instructions-list">
            {getSteps(recipe.strInstructions).map((step, index) => (
              <li key={index}>{step.trim()}.</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;