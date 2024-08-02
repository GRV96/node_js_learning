function gcd(a, b)
{
	a = Math.abs(a);
	b = Math.abs(b);

	if(b > a)
	{
		[a, b] = [b, a];
	}

	let r;
	while(true)
	{
		r = a % b;

		if (r <= 0)
		{
			break;
		}

		a = b;
		b = r;
	}

	return b;
}

function printGcd(a, b)
{
	console.log("gcd(" + a + ", " + b + ") = " + gcd(a, b));
}

console.log("Hello, world!\n");

printGcd(116, 54)
printGcd(72, -108);

console.log();
