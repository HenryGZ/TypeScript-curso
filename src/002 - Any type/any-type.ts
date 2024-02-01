function showMessage(msg : any){
  return msg;
} //isso é incorreto, pois o tipo any é muito genérico, e não é recomendado usá-lo

console.log(showMessage([1, 2, 3])); //retorna 1,2,3
