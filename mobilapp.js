function solucao(tempo, distancia) {
	let  valorEmCentavos;
    if(tempo < 5){
        
         valorEmCentavos = 600;
               console.log(valorEmCentavos);
    } else if( tempo>= 5 &&  tempo <= 60){
      valorEmCentavos= 100*tempo+50*distancia
               console.log(valorEmCentavos);
    } else if(tempo > 60 && distancia < 100){
      valorEmCentavos= 200*distancia;
      console.log(valorEmCentavos);
    }else{
      valorEmCentavos= 150*distancia;
      console.log(valorEmCentavos);
    }

}