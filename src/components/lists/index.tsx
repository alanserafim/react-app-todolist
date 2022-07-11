import React from "react";
import Item from "./item";
import style from "./Lista.module.scss"

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: "02:00:00"
    }, {
        tarefa: "JavaScript",
        tempo: "01:00:00"
    },{
        tarefa: "TypeScript",
        tempo: "03:00:00"
    } ]
    
    return(
      <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) => (
                <Item
                key={index}
                //Importando todas as props
                {...item}
                />
            ))}
        </ul>
      </aside>  
    )
}

export default Lista;