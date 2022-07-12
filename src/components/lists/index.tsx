import { Itarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss"


interface Props {
  tarefas: Itarefa[];
  //tipando uma função  : () =>
  selecionaTarefa: (tarefaSelecionada : Itarefa) => void;
}


//tarefas: Array<Itarefa>
function Lista({ tarefas, selecionaTarefa } : Props) {
    return(
      <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item) => (
                <Item
                selecionaTarefa={selecionaTarefa}
                key={item.id}
                //Importando todas as props
                {...item}
                />
            ))}
        </ul>
      </aside>  
    )
}

export default Lista;