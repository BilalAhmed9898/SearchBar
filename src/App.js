import './App.css';
import SearchBar from './Components/SearchBar';
import SearchBarResults from './Components/SearchBarResults';
import { useState } from 'react';

function App() {
  const [results, setResults] =useState([])
  return (
    <div className="App">
       <div className='search-bar-container'>
        <SearchBar setResults={setResults}/> 
        <SearchBarResults results={results} /> 
       </div>
    </div>
  );
}

export default App;
