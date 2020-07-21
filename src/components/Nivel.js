import React, { useContext } from 'react';
import { simonContext } from '../context/SimonProvider';

const Nivel = () => {

    const { nivel, estadoPartida } = useContext(simonContext);


    return (
        <div className="nivel">
            {estadoPartida === 'iniciada' ? <h2>El nivel actual es: {nivel}</h2> : ''}
        </div>
    );
}

export default Nivel;