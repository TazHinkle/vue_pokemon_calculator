var dataUrl = 'https://jsonp.afeld.me/?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffanzeyi%2Fpokemon.json%2Fmaster%2Fpokedex.json';

var renameSinglePokemonAttributes = function(inputPokemon) {
	return {
		name: inputPokemon.name.english,
		stamina: inputPokemon.base['HP'],
		attack: inputPokemon.base['Attack'],
		defense: inputPokemon.base['Defense'],
	};
};

var handleDataLoad = function(data) {
	var processedData = data.map(renameSinglePokemonAttributes);
	app.pokemonList = processedData;
};

var handleResponse = function(response) {
	var dataPromise = response.json();
	dataPromise.then(handleDataLoad);
};

var requestPromise = fetch(dataUrl);
requestPromise.then(handleResponse);
