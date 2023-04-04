import React from 'react';
import { useState } from 'react';
import './App.css';
import People from './People'
import Form from './Form';
import SearchBar from './SearchBar';

export const ApiUrlContext = React.createContext("localhost");
const defaultApiUrl = "http://localhost:3000";

function App() {
  const [apiUrl] = React.useState(defaultApiUrl);
  const [showNewDialog, setShowNewDialog] = React.useState(false);

  return (
    
    <div className='header'>
      <h1 className='title'>Random website</h1>
      <h2 className='subtitle'>Kaisa practicing</h2>
     <Form/>
  <People />
  <ApiUrlContext.Provider value={apiUrl}>
          <div
            show={showNewDialog}
            setShowNewRecipeDialog={setShowNewDialog}
          />
  </ApiUrlContext.Provider>
    </div>
  
  );
}

export default App;
