import React from 'react';
import Gato from '../images/gato.jpg';
import '../styles/Luisa.css';

function Luisa() {
    return (
        <main className='luisa'>
            <p className='top'>Vim te trazer essas flores a pedido do seu bbzinho</p>
            {/* <img src={Gato} alt="gato" /> */}
            <p className='bot'>Espero que goste!</p>
        </main>
    );
}

export default Luisa;
