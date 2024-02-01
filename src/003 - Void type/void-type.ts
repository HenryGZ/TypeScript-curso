function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('teste', 'teste2', 'teste3');

const pessoa = {
  nome: 'João',
  idade: 27,
  adulto: true,

  exibirNome(): void {
    console.log(this.nome);
  },
};

pessoa.exibirNome();

export { pessoa };
//export é para que o arquivo rode como module mode e não script mode
