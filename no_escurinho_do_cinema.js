function solucao(obj) {
    if(obj.temIngresso && (obj.idade >= obj.censura || obj.estaComPais)) {
    //pode entrar
    if (obj.temCarteirinha || obj.idade < 18) {
      console.log("MEIA");
    } else {
      console.log("INTEIRA");
    }
  } else {
    //nao pode entrar
    console.log("ACESSO NEGADO");
  }
}
