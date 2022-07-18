var n1 = Number(prompt ('Digite o primeiro número'));
var n2 = Number(prompt('Digite o segundo número'));
var n3 = Number(prompt('Digite o terceiro número'));
var aux;
if (n2 < n1) {
	aux = n1;
	n1 = n2;
	n2 = aux;
}
if (n3 < n1) {
	aux = n1;
	n1 = n3;
	n3 = aux;
}
if (n3 < n2) {
	aux = n2;
	n2 = n3;
	n3 = aux;
}
document.writeln(`o terceiro maior número ${n1}, o segundo maior número é o ${n2} e o maior número é o ${n3}`);
