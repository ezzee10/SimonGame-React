export const obtenerRandom = () => {
    let color = parseInt(Math.floor(Math.random() * 4) + 1, 10);

    switch (color) {
        case 1:
            color = 'green';
            break;
        case 2:
            color = 'red'
            break;
        case 3:
            color = 'blue'
            break;
        default:
            color = 'yellow'
            break;

    }

    return color;
}

export const variarColores = (listaDeColores) => {

    let boton1 = document.querySelector('.btn-1');
    let boton2 = document.querySelector('.btn-2');
    let boton3 = document.querySelector('.btn-3');
    let boton4 = document.querySelector('.btn-4');

    function iluminarColor(boton, color) {
        boton.classList.add('no-opacity');
        setTimeout(() => apagarColor(boton), 350);
        sonidos(color);
    }

    function apagarColor(boton) {
        boton.classList.remove('no-opacity');
    }

    if (listaDeColores) {
        for (let i = 0; i < listaDeColores.length; i++) {

            if (listaDeColores[i] === 'green') {

                setTimeout(() => iluminarColor(boton1, 'green'), 1000 * i);

            } else if (listaDeColores[i] === 'red') {

                setTimeout(() => iluminarColor(boton2, 'red'), 1000 * i);


            } else if (listaDeColores[i] === 'blue') {

                setTimeout(() => iluminarColor(boton3, 'blue'), 1000 * i);


            } else {
                setTimeout(() => iluminarColor(boton4, 'yellow'), 1000 * i);

            }
        }
    }

    function sonidos(color) {
        let sonido = '';

        if (color === 'green') {
            sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
        } else if (color === 'red') {
            sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
        } else if (color === 'blue') {
            sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
        } else if (color === 'yellow') {
            sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
        }

        sonido.currentTime = 0;
        sonido.play();
    }
}

export const compararListas = (lista1, lista2) => {

    if (lista1.length === lista2.length) {
        if (lista2[lista2.length - 1] === lista1[lista1.length - 1]) {
            return "next_level";
        } else {
            return "incorrecto";
        }
    } else {
        for (let i = 0; i < lista2.length; i++) {
            if (lista2[i] !== lista1[i]) {
                return "incorrecto";
            }
        }
    }
}
