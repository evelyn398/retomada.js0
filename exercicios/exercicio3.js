function verificarParouImpar (numero){ 
    if (numero %2 === 0){
     return "Par";
    } else {
        return "Impar";
    }
}

console.log(verificarParouImpar(7));
console.log(verificarParouImpar(10));
