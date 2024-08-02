function makePerson(pFirstName, pLastName, pBirthYear)
{
	return {
		firstName: pFirstName,
		lastName: pLastName,
		birthYear: pBirthYear,

		toString: () => pFirstName + " " + pLastName + " (" + pBirthYear + ")"
	};
}

module.exports = {makePerson};
