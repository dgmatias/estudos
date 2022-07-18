var letra = prompt('Digite uma letra').toLowerCase();
var classificao

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ) classificao = 'vogal'  
else classificao = 'consoante'

document.writeln (`A letra ${letra} é uma ${classificao}`)
