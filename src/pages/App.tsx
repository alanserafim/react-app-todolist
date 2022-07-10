import React from 'react';
import Botao from '../components/buttons/index';
import Formulario from '../components/forms';
import Lista from '../components/lists';
import style from "./App.module.scss"


function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario />
     <Lista />
    </div>
  );
}

export default App;
