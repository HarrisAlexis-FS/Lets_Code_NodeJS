const {add, subtract, multiply, divide, sqrt, max} = require("./math")
describe("Testing the math module", () => {

test("adding two numbers", () => {
    const result = add(2,4);
});

test("subtracting two numbers", () => {
    const result = subtract(4,2);
});

test("multiply two numbers", () => {
    const result = multiply(4,2);
});

test("divide two numbers", () => {
    const result = divide(4,2);
});

test("Square root of number", () => {
    const result = sqrt(4,2);
});

test("Max of two numbers", () => {
    const result = max(4,2);
});



});