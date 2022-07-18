var valorDoPedido = Number(prompt('Qual foi o valor da compra?'));
var meioDePag = prompt('Meio de pagamento').toLowerCase();
var ufDaEntrega = prompt('Estado onde vai ser entregue').toUpperCase();

var valorAPagar = valorDoPedido;

var desconto, imposto, frete = 20;

var resumoDoPedido = `Valor da compra: R$${valorDoPedido}\n`;

if (meioDePag === 'dinheiro') {
    desconto = valorAPagar * 0.03;
    valorAPagar -= desconto; // valorAPagar = valorAPagar - desconto;
    resumoDoPedido = resumoDoPedido + `Desconto: R$${desconto}\n`
}


if (ufDaEntrega === 'RJ') {
    imposto = valorAPagar * 0.2;
} else {
    imposto = valorAPagar * 0.12;

    valorAPagar += frete;
    resumoDoPedido = resumoDoPedido + `Frete: R$${frete}\n`;
}

valorAPagar += imposto; // valorAPagar = valorAPagar + imposto;
resumoDoPedido = resumoDoPedido + `Imposto: R$${imposto.toFixed(2)}\n`;    
   
   

resumoDoPedido = resumoDoPedido + 
`____________________
Valor a pagar: R$${valorAPagar}`;

alert(resumoDoPedido);
