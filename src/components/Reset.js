import React, { useContext } from 'react';
import { simonContext } from '../context/SimonProvider';

const Start = () => {

    const { reiniciarJuego, estadoPartida } = useContext(simonContext);

    return (
        <button
            type="button"
            className={estadoPartida === 'perdiste' ? 'start' : 'start hidden'}
            onClick={estadoPartida === 'perdiste' ?
                () => { reiniciarJuego(); }
                : ''
            }
        > Reiniciar</button >
    );
}

export default Start;