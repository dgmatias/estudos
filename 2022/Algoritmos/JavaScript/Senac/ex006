var tempo = Number(prompt('Qual é o tempo estimado ? '));
var distancia = Number(prompt('Qual é a distância ? '));
var pedagio =  prompt ('Tem algum pedágio até o local destinado ? [S/N] ');
if (pedagio != 'S' || pedagio != 'N'){
	alert('Você digitou errado, digite exatamente [S] ou ]N]')
} else {
	if (pedagio === 'S') {
		var valorpedagio = prompt('Qual o valor do pedagio ');
		var preco = 2.61 + (0.21 * tempo) + (1.24 * distancia) + valorpedagio;
		document.writeln(`o preco será de ${preco}`);
	} else{
	var preco = 2.61 + (0.21 * tempo) + (1.24 * distancia);
	document.writeln(`O preco será ${preco} `);	
	}
  }
