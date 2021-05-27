var pokemonTableRow = Vue.component(
	//convention for naming Vue components
	//note line template and table row class name
	'pokemon-table-row',
	{
		props: {
			pokemon: {
				type: Object,
				required: true,
			},
		},
		template: `
		<tr class="pokemon-table-row">
			<td>{{pokemon.name}}</td>
			<td>{{pokemon.stamina}}</td>
			<td>{{pokemon.attack}}</td>
			<td>{{pokemon.defense}}</td>
		</tr>
		`
	}
);

var pokemonTable = Vue.component(
	//convention for naming Vue components
	//note line template and table row class name
	'pokemon-table',
	{
		props: {
			list: {
				//root level Object that everything is
				//extrapolated from
				type: Array,
				required: true,
			},
			title: {
				type: String,
				required: false,
				default: 'Pokemon table',
			},
		},
		template: `
		<table
			class="pokemon-table"
			border="1"
		>
			<thead>
				<tr>
					<th
						colspan="4"
						align="center"
					>{{title}}</th>
				</tr>
				<tr>
					<th>Name</th>
					<th>Stamina</th>
					<th>Attack</th>
					<th>Defense</th>
				</tr>
			</thead>
			<tbody>
				<pokemon-table-row
					v-for="pokemon in list"
					:key="pokemon.id"
					:pokemon="pokemon"
					:title="pokemon.name"
				></pokemon-table-row>
			</tbody>
		</table>
		`
	}
);

var app = new Vue({
	el: '#app',
	data: {
		pokemonList: [
			{
				id: 25,
				name: 'Pikachu',
				stamina: 111,
				attack: 112,
				defense: 96,
			},
			{
				id: 150,
				name: 'Mewtwo',
				stamina: 214,
				attack: 300,
				defense: 182,
			},
			{
				id: 145,
				name: 'Zapados',
				stamina: 207,
				attack: 253,
				defense: 185,
			},
		]
	},
	template: `
	<div class="app">
		<h1>Pokemon App!</h1>
		<pokemon-table
			:list="pokemonList"
			title="Best Pokemon Ever"
		></pokemon-table>
	</div>
	`,
});
