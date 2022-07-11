import React, { useState } from 'react';
import Botao from '../components/buttons/index';
import Cronometro from '../components/chrometer';
import Formulario from '../components/forms';
import Lista from '../components/lists';
import { Itarefa } from '../types/tarefa';
import style from "./App.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas} />
     <Lista tarefas={tarefas} />
     <Cronometro />
    </div>
  );
}

export default App;
