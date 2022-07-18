var continuar = false;
while (continuar === false) {
  var limiteInf = Number(prompt('Digite um número'));
  var limiteSup = Number(prompt('Digite outro número'));

  if (limiteInf > limiteSup) {
    continuar = confirm ('O primeiro número é maior que o segundo deseja continuar assim mesmo ?');
  }
  if (continuar === true) {
    aux = limiteSup;
    limiteSup = limiteInf;
    limiteInf = aux;
    continuar === true
    break;
  }
  
  if (limiteInf < limiteSup) {
    continuar === true;
    break;
  } 
}
while (limiteInf <= limiteSup) {
    if (limiteInf % 2 === 0) {
        document.writeln (limiteInf);
    }
    limiteInf++;
}
