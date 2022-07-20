import { ContaCorrente } from "./contacorrente.js";
import { Cliente } from "./cliente.js";

var conta = new ContaCorrente ();
    conta.agencia = "1001";
    //conta.saldo = 3000; // <- encapsulado
    conta._saldo = 3000;
    conta.depositar();
    var valorSacado = conta.sacar (20000);
    conta.cliente = new Cliente ();
    conta.cliente.nome = "Maria";
    conta.cliente.cpf = 22222222222;
    // conta.gerente = 'Velasco' // <- Motivo do  javascript ser lindo

var conta2 = new ContaCorrente ();
    conta2.agencia = 1002;
    //conta2.saldo = 10000 // <- encapsulado
    conta2._saldo = 1000;
    conta2.depositar();
    var valorSacado2 = conta2.sacar (2000);
    conta2.cliente = new Cliente ();
    conta2.cliente.nome = "João"; 
    conta2.cliente.cpf = 11111111111;

//conta._saldo = 100000000000000000 código de ética, não mexa 
console.log (conta);
console.log (conta2);
conta.mostrarSaldo ();
conta2.mostrarSaldo ();
console.log (valorSacado);
console.log (valorSacado2);
