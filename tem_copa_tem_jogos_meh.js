function solucao(ano) {
    
	const copa = 2014;
    const jogos = 2016;

  if ((ano - copa) % 4 === 0) {
       console.log("COPA");
  } else if ((ano - jogos) % 4 === 0){
       console.log("JOGOS")
  } else{
       console.log("MEH")
} 
}