const calcularTotalComDesconto = require('./app');

// Gerado com o prompt: "Crie testes unitários usando Jest para a função calcularTotalComDesconto, testando um desconto de 10% e um caso de erro"
test('deve aplicar 10% de desconto corretamente', () => {
    expect(calcularTotalComDesconto(100, 10)).toBe(90);
});

test('deve lançar erro para desconto maior que 100', () => {
    expect(() => calcularTotalComDesconto(100, 110)).toThrow("Desconto inválido");
});