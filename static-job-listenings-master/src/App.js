import React, {  useState  } from "react";
import List from './list';
import Search from './search';
import './App.css';
import './page.css';
import data from './data.json'

function App() {
  const [filters, setFilters] = useState([]);
  const jobs = data;

  const [darkMode, setDarkMode] = useState(false);


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

  const toggleMode = () => {
    setDarkMode(!darkMode);
  }



  return (
    <div className={`App`}>
      <header className={`${darkMode ? "dark-mode" : ""}`}>
        <div className="mode" onClick={toggleMode}>
          {darkMode? '☀️' :'⏾'}
        </div>
      </header>
      
      <div className={`body ${darkMode ? "body-dark" : ""}`}>
        
        <div className="container">
          <div className="content">
            {/* Search Bar */}
            <Search 
              filters={filters} 
              addFilter={addFilter} 
              removeFilter={removeFilter} 
              clearFilters={clearFilters} 
              darkMode = {darkMode}
            />

            {/* The Tools */}
            <List filters={filters} jobs={jobs} darkMode={darkMode} />
            </div>

        </div>
          

 
       </div>
      
    </div>
  );
}

export default App;
