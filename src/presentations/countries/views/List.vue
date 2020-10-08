<template>
	<main class="w-full max-w-6xl mx-auto px-4 py-6">
		<div class="flex flex-wrap -mx-4 overflow-hidden">
			<div v-for="country of state.countries" :key="country.alpha2Code" class="my-4 px-4 w-full overflow-hidden md:w-1/2 lg:w-1/3">
				<Country :name="country.name" :capital="country.capital" :region="country.region" :alpha2Code="country.alpha2Code" :alpha3Code="country.alpha3Code" />
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import { get } from '@/utils/api';
// @ts-ignore
import Country from '../components/Country';

export default defineComponent({
	components: {
		Country,
	},

	setup() {
		const state = reactive({
			countries: [],
		});

		const getCountries = async () => {
			state.countries = await get('alpha?codes=aus;be;bra;ca;chn;cz;es;fra;de;hu;ind;ita;jpn;me;nl;pl;ro;ru;sg;se;ch;ua;gb;usa');
			console.log(state.countries);
		};

		getCountries();

		return {
			state,
		};
	},
});
</script>
