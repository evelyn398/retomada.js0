function verificarSituação(nota1,nota2, nota3){
    const media = (nota1+ nota2+ nota3) /3

    if (media >=7){
         return"Media" + media.toFixed(1) + ": Aprovado";
    } else if (media >=5){ 
        return "Media":"+ media.toFixed(1)+ "recuperação";
    } else {
        return "Media:" + media.toFixed(1) + " - Reprovado";
    }
}

console.log(VerificarSituaçao(8, 7.5,9));
  console.log(VerificarSituaçao(6, 5, 5.5));
   console.log(VerificarSituaçao(4, 3, 2));