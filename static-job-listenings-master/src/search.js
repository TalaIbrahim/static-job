import React, { useState } from "react";
import "./search.css";

function Search ({ filters, addFilter, removeFilter, clearFilters ,darkMode }) {

    const [inputValue, setInputValue] = useState("");

    // when enter 
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
          addFilter(inputValue.trim());
          setInputValue("");
        }
      };

      return (
        <div className={`search ${darkMode ? "search-dark" : ""}`}>
         <div className="selected-div">
            {filters.map((filter) => (
              <div className="selected" >
                <div className="selected-name">
                 {filter}
                </div>
                <div className="delete" onClick={() => removeFilter(filter)}>
                 X
                </div>
              </div>
            ))}
            <input
              type="text"
              placeholder="Choose your filter..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          {filters.length > 0 && (
            <div className={`clear ${darkMode ? "clear-dark" : ""}`} onClick={clearFilters}>
              Clear
            </div>
          )}
        </div>
      );
    };
    
export default Search;