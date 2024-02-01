/* eslint-disable */
//const nome = "João"; //o typescrip infere que o tipo da variável é string

let nome: string = "João";
let idade: number = 27;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

//ARRAYS
let arrayDeNumeros: Array<number> = [1, 2, 3]; 
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

//OBJETOS
let pessoa: {nome: string, idade: number, adulto?: boolean}//adulto é opcional
pessoa = {nome: 'João', idade: 27};
pessoa = {nome: 'João', idade: 27, adulto: true};
//console.log(pessoa.nome);
//console.log(pessoa.idade);
//console.log(pessoa.adulto);
//console.log(pessoa);

let carro: {nome: string, ano: number, chassi?: string} = {nome:'fusca', ano: 2000};

//FUNÇÕES
function soma(x: number, y: number): number {
    return x + y;
}//o typescript infere que o retorno é number 

//anotação de tipo de função, tipo uma arrow function
const soma2:(x: number, y: number) => number = (x,y) => x + y;