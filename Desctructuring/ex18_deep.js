var pessoa = {
    nome: 'Ana',
    endereco: {
        rua: 'Dona Ines',
        numero: 1000
    }
};

var { nome, endereco : {rua, numero, cep}} = pessoa;

console.log(nome, rua, numero,cep);

var { conta : { numero, agencia}} = pessoa;

//console.log (numero, agencia); Nesse ponto vai dar erro, pois a estrutura conta não faz parte de pessoa