import React, { useContext } from 'react';
import { simonContext } from '../context/SimonProvider';

const EstadoPartida = () => {

    const { estadoPartida } = useContext(simonContext);

    return (
        <div>
            {
                (estadoPartida === 'perdiste') ? <h2 class="red">¡Has perdido la partida!</h2> : ''
            }
        </div>
    );
}

export default EstadoPartida;