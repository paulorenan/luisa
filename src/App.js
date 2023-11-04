import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Luisa from './components/Luisa.jsx';

function App() {
  const [isLuisa, setIsLuisa] = useState(false);
  const [isStrange, setIsStrange] = useState(false);

  return (
    <>
    {!isLuisa && !isStrange && <Home setIsLuisa={setIsLuisa} setIsStrange={setIsStrange}/>}
    {isLuisa && <Luisa></Luisa>}
    </>
  );
}

export default App;
