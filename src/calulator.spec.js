let Calculator = require ("./calculator");

//Example test
describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add(';\n1;2');
        expect(calculatorResult).toBe(3);
    });
});