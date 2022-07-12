export function tempoParaSegundos(tempo : string){
    //Dividindo a string em horas, minutos e segundos. Com o valor padrão 0
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");
    
    //Convertendo de string para numero => 1 horas é igual a 3600 segundos, 1 minuto é igual a 60 segundos
    const horasEmSegundos = Number(horas) * 3600; 
    const minutosEmSegundos = Number(minutos) * 60;
    //Somando os segundos
    return horasEmSegundos + minutosEmSegundos + Number(segundos)

}