function solucao(precos) {
    let total = 0
    let menorvalor= Math.min(...precos);
        for ( let i = 0; i < precos.length; i++ ){
            total += precos[i];
}
        if(precos.length >= 5){
            total = total - menorvalor
}
        console.log(total);
    
}
