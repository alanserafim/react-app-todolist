import React from 'react';
import Botao from '../components/buttons/index';
import Cronometro from '../components/chrometer';
import Formulario from '../components/forms';
import Lista from '../components/lists';
import style from "./App.module.scss"


function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario />
     <Lista />
     <Cronometro />
    </div>
  );
}

export default App;
