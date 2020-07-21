import React, { useContext, Fragment } from 'react';
import { simonContext } from '../context/SimonProvider';
import { variarColores } from '../functions/funciones';

const BotonesColores = () => {

    const { maquina, agregarColoresDelJugador, estadoPartida } = useContext(simonContext);

    const colores = [
        { id: '1', color: 'green' },
        { id: '2', color: 'red' },
        { id: '3', color: 'blue' },
        { id: '4', color: 'yellow' }
    ];

    const botones = colores.map(color => (
        <button
            key={color.id}
            type="button"
            className={`btn btn-${color.id} `}
            onClick={(maquina === false && estadoPartida !== 'perdiste') ?
                () => { agregarColoresDelJugador(color.color); variarColores([color.color]); }
                : ''
            }
        ></button>
    ));


    return (

        <Fragment>
            <div>{botones[0]}{botones[1]}</div>
            <div>{botones[3]}{botones[2]}</div>
        </Fragment>

    );
}

export default BotonesColores;