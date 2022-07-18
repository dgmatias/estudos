var n1 = Number(prompt('Digite um número'));
var limitador = Number(prompt('Digite um número'));
if (n1 > limitador) {
    aux = limitador;
    limitador = n1;
    n1 = aux;
}

while (n1 <= limitador) {
    if (n1 % 2 === 0) {
        document.writeln (`O ${n1} é par `);
    }
    n1++;
}
