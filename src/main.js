const my_math = require("./my_math");

function printGcd(a, b)
{
	console.log("gcd(" + a + ", " + b + ") = " + my_math.gcd(a, b));
}

console.log("Hello, world!\n");

printGcd(116, 54)
printGcd(72, -108);

console.log();
