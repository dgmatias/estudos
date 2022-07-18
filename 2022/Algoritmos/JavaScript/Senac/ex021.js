var ano = Number(prompt('Digite um ano'));

if (ano % 400 === 0) {
    document.writeln (`${ano} é um ano bissexto`);
} else if (ano % 4 === 0 && ano % 100 !== 0) {
    document.writeln (`${ano} é um ano bissexto`);
  
    
  }  
