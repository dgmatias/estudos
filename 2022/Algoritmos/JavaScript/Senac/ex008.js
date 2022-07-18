var n1 = Number(prompt('Digite o primeiro número'));
var n2 = Number(prompt('Digite o segundo número'));
var n3 = Number(prompt('Digite o terceiro número'));
var maior = n1;
if (n2 > maior) maior = n2;
if (n3 > maior) maior = n3;
document.writeln (`Entre os números ${n1}, ${n2} e ${n3} o maior entre eles é : ${maior}`);
