function tag(strings, ...values){
    console.log(strings);
    console.log(values);
    return 'Outro Valor';
}

var aluno = 'Vinicio';
var status = 'Aprovado';
console.log(tag `${aluno} está ${status}`);