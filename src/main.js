/*
* This function receives array of names (strings)
* and returns only the ones without 'V'.
* Example: ['anna', 'victor', 'yossi']
* Returns: ['anna', 'yossi']
* */

function removeNamesWithV(names) {
	return names.filter(name => !name.includes('v'));
}

