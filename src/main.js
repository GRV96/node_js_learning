const my_math = require("./my_math");
const person = require("./person");

function calculatePersonAge({birthYear})
{
	// Person object destructured
	return new Date().getFullYear() - birthYear;
}

function printGcd(a, b)
{
	console.log("gcd(" + a + ", " + b + ") = " + my_math.gcd(a, b));
}

console.log("Hello, world!\n");

printGcd(116, 54)
printGcd(72, -108);

console.log("\nBig Shaq: " + my_math.skrrra() + "\n");

gustav = person.makePerson("Gustav", "Romeo", 1996);
console.log(gustav.toString());
console.log("Age: " + calculatePersonAge(gustav) + "\n");
