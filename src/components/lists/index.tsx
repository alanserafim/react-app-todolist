import { Itarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss"


//tarefas: Array<Itarefa>
function Lista({ tarefas } : { tarefas: Itarefa[]}) {
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