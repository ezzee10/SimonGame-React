import React, { useContext } from 'react';
import { simonContext } from '../context/SimonProvider';

const Start = () => {

    const { iniciarPartida, estadoPartida } = useContext(simonContext);

    return (
        <button
            type="button"
            className={estadoPartida !== 'no-iniciada' ? 'start hidden' : 'start'}
            onClick={estadoPartida === 'no-iniciada' ?
                () => { iniciarPartida(); }
                : ''
            }
        > Iniciar</button >
    );
}

export default Start;