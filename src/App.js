import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Luisa from './components/Luisa.jsx';
import Die from './images/The_Weeknd_-_Die_For_You.mp3'

function App() {
  const [isLuisa, setIsLuisa] = useState(false);
  const [isStrange, setIsStrange] = useState(false);

  return (
    <>
    {!isLuisa && !isStrange && <Home setIsLuisa={setIsLuisa} setIsStrange={setIsStrange}/>}
    {isLuisa && <Luisa></Luisa>}
    <audio autoPlay loop id="audioPlayer">
      <source src={Die} type="audio/mpeg"/>
    </audio>
    </>
  );
}

export default App;
