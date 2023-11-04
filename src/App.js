import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Luisa from './components/Luisa.jsx';
import Strange from './components/Strange.jsx';
import Die from './images/The_Weeknd_-_Die_For_You.mp3'
import Some from './images/some.mp3'

function App() {
  const [isLuisa, setIsLuisa] = useState(false);
  const [isStrange, setIsStrange] = useState(false);

  return (
    <>
    {!isLuisa && !isStrange && <Home setIsLuisa={setIsLuisa} setIsStrange={setIsStrange}/>}
    {isLuisa && <Luisa></Luisa>}
    {isStrange && <Strange></Strange>}
    <audio loop id="audioLuisa">
      <source src={Die} type="audio/mpeg"/>
    </audio>
    <audio loop id="audioStrange">
      <source src={Some} type="audio/mpeg"/>
    </audio>
    </>
  );
}

export default App;
