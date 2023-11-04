import React from 'react';
import '../styles/Home.css';

function Home(props) {

    const handleLuisa = () => {
        props.setIsLuisa(true);
    }

    const handleNotLuisa = () => {
        props.setIsStrange(false);
    }

    return (
        <main>
            <h1>Olá Luísa</h1>
            <button onClick={handleLuisa}>Sou a Luísa</button>
            <p>PS: se vc não for a Luísa clique aqui</p>
            <button onClick={handleNotLuisa}>Não sou a Luísa</button>
        </main>
    );
}

export default Home;