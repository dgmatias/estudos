export class ContaCorrente {
    //Atributo público
    agencia = "";
    cliente = "";
    //#saldo = "";  <- não utilizar o # pra privar um atributo
    
    //Atributo privado
    _saldo = "";

    depositar (valor) {
        if (valor > 0) {
            //this.#saldo += valor;
            this._saldo += valor;
            return valor;        
        }
    }
    sacar (valor) {
        if (valor <= 0) return

        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    mostrarSaldo () {
        //console.log (' Saldo : $' + this.#saldo);
        console.log (' Saldo : $' + this._saldo);
    }
}
