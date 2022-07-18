var n1 = Number(prompt('Digite um número'));
var n2 = Number(prompt('Digite outro número'));
var opcao = Number(prompt('Escolha uma das opções (1) soma (2) subtração (3) multiplicação (4) divisão'));
switch (opcao) {
    case 1:
        var opr = n1 + n2;
        break;
    case 2:
        var opr = n1 - n2;
        break;
    case 3:
        var opr = n1 * n2;  
        break;
    case 4:
        var opr = n1 / n2;
        break;
    default:
        alert ('Opção inválida')   
}
document.writeln (`O resultado entre ${n1} e ${n2} é ${opr}`)    
