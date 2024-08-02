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

const skrrra = () => 2 + 2;

module.exports = {gcd, skrrra};
