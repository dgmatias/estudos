var peso = Number(prompt('Digite seu peso'));
var altura = Number(prompt('Digite sua altura'));
var imc = Number(peso/(altura*altura));

if (imc < 18.5) { 
	document.writeln (`Imc : ${imc}`);
	document.writeln ('Classificação :  Abaixo do peso');
}
if (imc >= 18.5 && imc <= 24.9) {
	document.writeln (`Imc : ${imc}`);
	document.writeln ('Classificação : Peso normal');
}
if (imc >= 25 && imc <= 29.9) {
	document.writeln (`Imc : ${imc}`);
	document.writeln ('Classificação : Sobrepeso');
}
if (imc >= 30 && imc <= 34.9) {
	document.writeln (`Imc : ${imc}`);
	document.writeln ('Classificação : Obesidade grau 1');
}
if (imc >= 35 && imc <= 39.9) {
	document.writeln (`Imc : ${imc}`);
	document.writeln ('Classificação : Obesidade grau 2');
}
if (imc >= 40) {
	document.writeln (`Imc : ${imc}`);
	document.writeln ('Classificação : Obesidade Mórbida');
}
