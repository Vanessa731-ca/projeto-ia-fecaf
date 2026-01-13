// Gerado com o prompt: "Crie uma função que calcula o total de pedidos com desconto aplicado para uma ferramenta de colaboração"
function calcularTotalComDesconto(preco, desconto) {
    if (desconto < 0 || desconto > 100) {
        throw new Error("Desconto inválido");
    }
    return preco - (preco * (desconto / 100));
}

module.exports = calcularTotalComDesconto;