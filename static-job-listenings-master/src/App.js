import React, { useState } from "react";
import List from './list';
import Search from './search';
import './App.css';
import './page.css';
import data from './data.json'

function App() {
  const [filters, setFilters] = useState([]);
  const jobs = data;


  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      <header>
        
      </header>
      <div className="body">
        
        <div className="container">
          <div className="content">
            {/* Search Bar */}
            <Search 
              filters={filters} 
              addFilter={addFilter} 
              removeFilter={removeFilter} 
              clearFilters={clearFilters} 
            />

            {/* The Tools */}
            <List filters={filters} jobs={jobs} />
            </div>

        </div>
          

 
       </div>
      
    </div>
  );
}

export default App;
