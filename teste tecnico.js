// teste 1
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    if (numero === a || numero === b) return `${numero} pertence à sequência de Fibonacci`;

    let c = a + b;
    while (c <= numero) {
        if (c === numero) return `${numero} pertence à sequência de Fibonacci`;
        a = b;
        b = c;
        c = a + b;
    }
    return `${numero} não pertence à sequência de Fibonacci`;
}

let numero = 0;  // Você pode mudar esse número para testar
console.log(pertenceFibonacci(numero));

//teste 2
function contarLetraA(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            contador++;
        }
    }
    return `A letra 'a' aparece ${contador} vezes na string.`;
}

let stringTeste = "Amar é facil";
console.log(contarLetraA(stringTeste));

