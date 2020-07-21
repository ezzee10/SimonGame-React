import React, { Fragment } from 'react';

import SimonProvider from './context/SimonProvider';

import Start from './components/Start';
import Reset from './components/Reset';
import EstadoPartida from './components/EstadoPartida';
import Nivel from './components/Nivel';
import BotonesColores from './components/BotonesColores';


function App() {
  return (

    <Fragment>
      <div className="container">
        <h1>Simon Game</h1>
        <SimonProvider>
          <EstadoPartida />
          <BotonesColores />
          <Nivel />
          <div class="cont-button">
            <Start />
          </div>
          <Reset />
        </SimonProvider>
      </div>
    </Fragment>
  );
}

export default App;
