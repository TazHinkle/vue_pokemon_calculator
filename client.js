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
		computed: {
			statSum: function () {
				return (
					this.pokemon.stamina
					+ this.pokemon.attack
					+ this.pokemon.defense
				);
			}
		},
		template: `
		<tr class="pokemon-table-row">
			<td
				class="name-row"
			>{{pokemon.name}}</td>
			<td>{{pokemon.stamina}}</td>
			<td>{{pokemon.attack}}</td>
			<td>{{pokemon.defense}}</td>
			<td>{{statSum}}</td>
		</tr>
		`
	}
);

var pokemonTableColumnHeader = Vue.component(
	//convention for naming Vue components
	//note line template and table row class name
	'pokemon-table-column-header',
	{
		props: {
			pokemon: {
				type: Object,
				required: true,
			},
		},
		computed: {
			statSum: function () {
				return (
					this.pokemon.stamina
					+ this.pokemon.attack
					+ this.pokemon.defense
				);
			}
		},
		template: `
		<tr class="pokemon-table-row">
			<td
				class="name-row"
			>{{pokemon.name}}</td>
			<td>{{pokemon.stamina}}</td>
			<td>{{pokemon.attack}}</td>
			<td>{{pokemon.defense}}</td>
			<td>{{statSum}}</td>
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
		methods: {
			emitSort: function (name, direction) {
				console.log('clicked emitSort', name, direction);
				this.$emit('sort', {name, direction});
			},
		},
		template: `
		<table
			class="pokemon-table"
		>
			<thead>
				<tr>
					<th
						colspan="5"
						align="center"
					>{{title}}</th>
				</tr>
				<tr>
					<th
						class="name-row"
					>
						<span>Name</span>
						<button
							@click = "emitSort('name', 'forward')"
						>Up</button>
						<button
							@click = "emitSort('name', 'backward')"
						>Down</button>
					</th>
					<th>
						<span>Stamina</span>
						<button
							@click = "emitSort('stamina', 'forward')"
						>Up</button>
						<button
							@click = "emitSort('stamina', 'backward')"
						>Down</button>
					</th>
					<th>
						<span>Attack</span>
						<button
							@click = "emitSort('attack', 'forward')"
						>Up</button>
						<button
							@click = "emitSort('attack', 'backward')"
						>Down</button>
					</th>
					<th>
						<span>Defense</span>
						<button
							@click = "emitSort('defense', 'forward')"
						>Up</button>
						<button
							@click = "emitSort('defense', 'backward')"
						>Down</button>
					</th>
					<th>
						<span>Stat Sum</span>
					</th>
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
var pokemonList = [
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
	{
		id: 999,
		name: 'Bob',
		stamina: 999,
		attack: 999,
		defense: 999,
	},
];

var app = new Vue({
	el: '#app',
	data: {
		pokemonList: JSON.parse(JSON.stringify(pokemonList)),
	},
	methods: {
		handleSortEvent: function (sortValues) {
			var sortingMethod = tableSortingMethods[sortValues.name][sortValues.direction];
			this.pokemonList.sort(sortingMethod);
		}
	},
	template: `
	<div class="app">

		<pokemon-table
			:list="pokemonList"
			title="Bob and the Pokemon: A Pokemon Stat App"
			@sort="handleSortEvent"
		></pokemon-table>
	</div>
	`,
});
