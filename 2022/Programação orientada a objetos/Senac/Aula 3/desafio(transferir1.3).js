class Cliente {
    nome = '';
    cpf = '';
}

class ContaCorrente {
    agencia = '';
    transferido = 0;
    _saldo = 0;
    
    
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor 
        }
    }
    
    sacar (valor) {
        if (valor > 0 && valor <= this._saldo) {
            return this._saldo -= valor;
        }
    }
    
    transferir (valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor 
            this.transferido = valor
            return this.transferido
        }
    }
    mostrarSaldo () {
        this._saldo = this._saldo + this.transferido
        return (`Saldo ${this._saldo}`)
    }
    
}


var cliente = new Cliente ();
    cliente.nome = 'Diego';
    cliente.cpf = '11111111111';
var conta = new ContaCorrente ();
    conta.agencia = 1001;
    conta.depositar (2000);
    conta.sacar (500);
    conta.transferir (1000);
    conta.mostrarSaldo ();   
    
    
    var cliente2 = new Cliente ();
    cliente2.nome = 'Rodrigo';
    cliente2.cpf = '22222222222';
    var conta2 = new ContaCorrente ();
    conta2.agencia = 1002;
    conta2.depositar (1000);
    conta2.sacar (0);
    conta2.transferir (100);
    conta2.mostrarSaldo ();
