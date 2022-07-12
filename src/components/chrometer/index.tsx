import Botao from "../buttons";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { ReactNode, useEffect, useState } from "react";

interface Props {
    selecionado: Itarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa } : Props) {
    const [tempo, setTempo] = useState<number>();
    
    // hook que evita o looping infinito monitorando a mudança da prop
    // useEffect recebe dois parametros, uma função e um array de dependencias
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);

    function regressiva(contador: number = 0){
        //poderia usar promisse e await
        //usando recursividade =>
        //setTimeOut recebe a função e o tempo de chamada
        setTimeout(() =>{
            if(contador>0){
                setTempo(contador - 1);
                return regressiva (contador - 1);
            }
            finalizarTarefa();
        }, 1000)
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> 
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}