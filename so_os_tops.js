function solucao(produtos) {
	let topDeLinha = 0;
  let total = 0;
  let percentual = 0;
  for(i = 0; i < produtos.length; i++){
      total += produtos[i].preco;

      if(produtos[i].preco > 10000){
        topDeLinha += produtos[i].preco;
      }      
  }
  
  percentual= topDeLinha/total;

  console.log({
    "totalTop": topDeLinha,
    "percentual": percentual
  })
    
}