var idade = Number(prompt('Digite sua idade '));

if (idade <= 15) {
    document.writeln ('Você não pode entrar');
}
else {
    if (idade === 17) {
        document.writeln ('Você pode entrar porém não pode beber');
    }
    else {
        document.writeln ('Tudo liberado');
    }
}   
