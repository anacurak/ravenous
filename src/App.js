// src/App.js

import React from 'react';
import './App.css';
import BusinessList from './components/Business'; // Import BusinessList (from the same file as Business)

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <BusinessList /> {/* Render the list of businesses */}
    </div>
  );
}

export default App;
