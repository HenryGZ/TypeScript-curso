const objetoA = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
//objetoA.chaveC = 'Nova chave'; // dessa forma não é possível adicionar novas chaves

// Para adicionar novas chaves, é necessário utilizar o tipo Record
const objetoB: Record<string, unknown> = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoB.chaveA = 'Outro valor';
objetoB.chaveC = 'Nova chave'; // dessa forma é possível adicionar novas chaves
console.log(objetoB.chaveC);

//ou utilzar esse tipo de objeto
const objetoC: {
    chaveA: string;
    chaveB: string;
    chaveC?: string; // ? indica que a chave é opcional
    [key: string]: unknown; // permite adicionar novas chaves
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoC.chaveA = 'Outro valor';
objetoC.chaveC = 'Nova chave';
objetoC.chaveD = 'Nova chave 2'; // dessa forma é possível adicionar novas chaves
