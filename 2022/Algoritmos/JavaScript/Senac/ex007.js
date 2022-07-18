var nota1 = Number(prompt('Digite a primeira nota'));
var nota2 =Number(prompt('Digite a segunda nota'));
var media = (nota1 + nota2) / 2
if (media > 6) {
	document.writeln (`A sua média foi ${media}`)
	document.writeln (`Situação : Aprovado`)
}
else {
	document.writeln (`A sua média foi ${media}`)
	document.writeln (`Situação : Reprovado`)
}
