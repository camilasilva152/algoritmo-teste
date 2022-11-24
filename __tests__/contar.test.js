const funcoes = require('../index');

test("the string should have all numbers from 1 to 5", () => {
    expect(funcoes.contar(5)).toBe("1 2 3 4 5");
})

test("the string should have all numbers from 1 to 10", () => {
    expect(funcoes.contar(10)).toBe("1 2 3 4 5 6 7 8 9 10");
});