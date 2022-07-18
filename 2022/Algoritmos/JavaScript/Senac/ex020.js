/* A partir do array sugerido, imprima todas as palavras capituladas (primeira letra maiúscula e o resto minúscula). 
 * Exemplo: de 'PaLaVrA' para 'Palavra'
 */

var palavras = ['SeNaC', 'niTeroi', 'ALGOritmos', 'LogicA', 'terMINAndo'];

for (var p of palavras) {
    p = p.toLowerCase();
    p = p[0].toUpperCase() + p.slice(1);
    console.log(p);
}
