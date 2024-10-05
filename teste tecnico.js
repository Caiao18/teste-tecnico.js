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
//------------------------------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------------
// teste 3

// int INDICE = 12, SOMA = 0, K = 1;
// enquanto K < INDICE faça {
//     K = K + 1;
//     SOMA = SOMA + K;
// }
// imprimir(SOMA);

// O valor da SOMA será 91.

//--------------------------------------------------------------------------------------------------------------------------------------
// teste 4

// A) 1, 3, 5, 7, 9
// B) 2, 4, 8, 16, 32, 64, 128
// C) 0, 1, 4, 9, 16, 25, 36, n/sei
// D) 4, 16, 36, 64, 100
// E) 1, 1, 2, 3, 5, 8, 13
// F)2, 10, 12, 16, 17, 18, 19, n/sei

//-------------------------------------------------------------------------------------------------------------------------------------
//teste 5

// Felizmente, eu sei a resposta da questão 5, pois vi em um TikTok há cerca de 3 dias.
// Eu ligaria o primeiro interruptor e esperaria 10 minutos. Logo depois, desligaria o primeiro
// interruptor e ligaria o segundo interruptor.
// Na primeira ida à sala das lâmpadas, eu notaria o seguinte:
// - Se uma lâmpada estiver acesa, ela está conectada ao segundo interruptor.
// - Se a lâmpada estiver apagada, eu tocaria nela. Se estiver quente, ela foi ligada antes e 
//   está conectada ao primeiro interruptor.
// - Se a lâmpada estiver apagada e fria, ela está conectada ao terceiro interruptor.
