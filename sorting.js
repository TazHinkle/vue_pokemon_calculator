var sortNumberForward = function (a, b) {
	return a - b;
}
var sortNumberBackward = function (a, b) {
	return b - a;
}

var sortStringForward = function (a, b) {
	return a.localeCompare(b);
}
var sortStringBackward = function (a, b) {
	return b.localeCompare(a);
}

var createObjectSortingFunction = function (propertyName, sortingFunction) {
	return (a, b) => {
		var aPropertyValue = a[propertyName];
		var bPropertyValue = b[propertyName];
		return sortingFunction(aPropertyValue, bPropertyValue);
	}
}

var tableColumns = [
	'name',
	'attack',
	'defense',
	'statSum',
];

var tableSortingMethods = {
	name: {
		forward: createObjectSortingFunction('name', sortStringForward),
		backward: createObjectSortingFunction('name', sortStringBackward),
	},
	stamina: {
		forward: createObjectSortingFunction('stamina', sortNumberForward),
		backward: createObjectSortingFunction('stamina', sortNumberBackward),
	},
	attack: {
		forward: createObjectSortingFunction('attack', sortNumberForward),
		backward: createObjectSortingFunction('attack', sortNumberBackward),
	},
	defense: {
		forward: createObjectSortingFunction('defense', sortNumberForward),
		backward: createObjectSortingFunction('defense', sortNumberBackward),
	},
	statSum: {
		forward: createObjectSortingFunction('statSum', sortNumberForward),
		backward: createObjectSortingFunction('statSum', sortNumberBackward),
	},
}
