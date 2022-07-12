import React from "react";
import style from "./Botao.module.scss"

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}


function Botao( { onClick, type, children} : Props){
    
    return(
        <button 
          className={style.botao} 
          type={type} 
          onClick={onClick}
        > {children}
        </button>
    )
}

export default Botao;




/*
=========> componente feito em class component
************************************************************
class Botao1 extends React.Component <{
    children: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void

    }>{
    render() {
        const { type = "button", onClick} = this.props;
        return (
            <button className={style.botao} type={type} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }

}
************************************************************
*/