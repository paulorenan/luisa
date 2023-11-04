import React from 'react';
import '../styles/Home.css';

function Home(props) {

    const handleLuisa = () => {
        const audio = document.getElementById("audioLuisa");
        audio.play();
        props.setIsLuisa(true);
    }

    const handleNotLuisa = () => {
        const audio = document.getElementById("audioStrange");
        audio.play();
        props.setIsStrange(true);
    }

    return (
        <main className='home'>
            <h1 className='title'>Olá Luísa</h1>
            <p className='subtitle'>Tenho uma pequena surpresa para você</p>
            <p className='subtitle'>Clique no botão abaixo</p>
            <button className='button-1' onClick={handleLuisa}>Sou a Luísa</button>
            <div className='footer'>
            <p className='footer-p'>PS: se vc não for a Luísa clique aqui</p>
            <button className='button-1' onClick={handleNotLuisa}>Não sou a Luísa</button>
            </div>
        </main>
    );
}

export default Home;