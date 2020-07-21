import React, { useState, useEffect } from 'react';
import { obtenerRandom, compararListas, variarColores } from '../functions/funciones';

export const simonContext = React.createContext();


const SimonProvider = props => {

    //----------------------------------------------------------------------States-------------------------------------------------------------------------------------------//

    //colores de simón
    const [colors, changeListColors] = useState([]);

    //colores del jugador
    const [colors_player, changeColorPlayer] = useState([]);

    //estado de la partida
    const [estadoPartida, changeEstadoPartida] = useState('no-iniciada');

    //state del turno de la CPU si maquina = TRUE entonces es su turno y el usuario debe esperar
    const [maquina, changeMaquina] = useState(true);

    //state del nivel actual
    const [nivel, changeLevel] = useState(1);

    //----------------------------------------------------------------------Funciones---------------------------------------------------------------------------------//

    //cuando pasa algun cambio en los colores elegidos por el jugador se comprueba si la secuencia es correcta, en caso de ser correcta cambia el turno a la CPU

    useEffect(() => {
        comprobarSecuenciaCorrecta();
        // eslint-disable-next-line
    }, [colors_player]);

    //cuando surge un cambio en los colores de simón entonces mando a llamar variar colores y le paso el turno al usuario

    useEffect(() => {
        if (colors.length !== 0) {
            variarColores(colors);
            setTimeout(() => turnoUsuario(), 1100 * colors.length);
        }
    }, [colors]);


    //iniciar la partida
    const iniciarPartida = () => {
        cambiarEstadoPartida();
        addColor(obtenerRandom());
    }

    //agrega un color a la lista de colores de simón
    const addColor = color => {
        changeListColors([...colors, color]);
    }

    //cambia el turno al usuario
    const turnoUsuario = () => {
        changeMaquina(false);
    }

    //cambia el turno a la cpu y agrego un nuevo color a simón 
    const turnoCPU = () => {
        changeMaquina(true);
        setTimeout(function () {
            addColor(obtenerRandom());
        }, 2000);
    }

    //cambia el estado de la partida, si está iniciada o ya finalizó
    const cambiarEstadoPartida = () => {
        changeEstadoPartida('iniciada');
        turnoUsuario();
    }

    //agrega los colores elegidos por el jugador, si la cantidad de colores elegidos es igual a la cantidad de simón => bloqueo los botones
    const agregarColoresDelJugador = (color) => {
        if (colors.length === colors_player.length) {
            return;
        } else {
            changeColorPlayer([...colors_player, color]);
        }
    }

    //comprueba si la secuencia ingresada por el usuario es correcta, en caso de ser correcta le pasa el turno a la CPU, reinicia la lista de colores seleccionada x el usuario y aumenta el nivel en 1
    //en caso de ser incorrecto, cambia el estado de la partida a perdiste
    const comprobarSecuenciaCorrecta = () => {
        let resultado = compararListas(colors, colors_player);
        if (resultado === 'next_level' && colors_player.length !== 0) {
            turnoCPU();
            changeColorPlayer([]);
            aumentarNivel();
        } else if (resultado === 'incorrecto') {
            changeEstadoPartida('perdiste');

        }
    }

    //cambia el nivel actual a uno superior
    const aumentarNivel = () => {
        changeLevel(nivel + 1);
    }

    //reiniciar el juego
    const reiniciarJuego = () => {
        changeColorPlayer([]);
        changeEstadoPartida(['no-iniciada']);
        changeMaquina(true);
        changeLevel(1);
        changeListColors([colors.length = 0]); //fue la unica forma en que me funcionó de otra manera se añadian a los que ya tenía..
        iniciarPartida();
    }

    return (
        <simonContext.Provider
            value={{
                colors,
                estadoPartida,
                maquina,
                nivel,
                addColor,
                cambiarEstadoPartida,
                changeMaquina,
                turnoUsuario,
                agregarColoresDelJugador,
                comprobarSecuenciaCorrecta,
                iniciarPartida,
                reiniciarJuego
            }}
        >
            {props.children}
        </simonContext.Provider>
    );
}

export default SimonProvider;