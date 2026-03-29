import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {

  const [inputValue, setInputValue] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault(); 

  
    if (inputValue.trim() === "") {
      setValidationError("Please type a food name (e.g., 'Pasta')");
      return;
    }

    setValidationError(""); 
    onSearch(inputValue);   
  };

  return (
    <div className="search-bar-wrapper">
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '10px' }}>
        
        <input
          type="text"
          placeholder="What are we cooking today?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
          style={{ padding: '10px', flex: '1', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        
        <button type="submit" className="search-btn" border="none" style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#64c7c7', color: 'white', cursor: 'pointer' }} >
          Search
        </button>
      </form>

      
      {validationError && (
        <p style={{ color: 'orange', fontSize: '14px', marginTop: '5px' }}>
          {validationError}
        </p>
      )}
    </div>
  );
};

export default SearchBar;