const {bubble, bubble3} = require('./bubble')

// Função para medir o tempo decorrido
function medirTempo(funcao, array) {
    console.time('tempo');
    funcao(array);
    console.timeEnd('tempo');
}
// Teste com array no melhor e pior caso

let array = [1,2,3,4,5]
let array2= [5,4,3,2,1]

console.log('Tempo para Bubble Sort:');
medirTempo(bubble, array);

console.log('Tempo para Bubble Sort 2:');
medirTempo(bubble3, array);
