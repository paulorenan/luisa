import React from 'react';
import '../styles/Home.css';

function Home(props) {

    const handleLuisa = () => {
        const audio = document.getElementById("audioLuisa");
        audio.play();
        props.setIsLuisa(true);
    }

    const handleNotLuisa = () => {
        props.setIsStrange(true);
    }

    return (
        <main className='home'>
            <h1>Olá Luísa</h1>
            <p className='subtitle'>Tenho uma pequena surpresa para você</p>
            <p className='subtitle'>Clique no botão abaixo</p>
            <button onClick={handleLuisa}>Sou a Luísa</button>
            <p>PS: se vc não for a Luísa clique aqui</p>
            <button onClick={handleNotLuisa}>Não sou a Luísa</button>
        </main>
    );
}

export default Home;