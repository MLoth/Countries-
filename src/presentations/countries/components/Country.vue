<template>
	<router-link
		:to="`/${alpha3Code}`"
		class="opacity-50 hover:opacity-100 focus:outline-none focus:shadow-outline"
	>
		<header class="flex items-center mb-4">
			<img
				class="h-6 w-auto rounded-md"
				:src="
					`https://restcountries.eu/data/${alpha3Code.toLowerCase()}.svg`
				"
				:alt="`The flag of ${name}.`"
			/>

			<h2 class="text-xl font-semibold ml-3">{{ name }}</h2>
		</header>
		<div class="flex">
			<div class="w-1/3">
				<h3 class="font-semibold">Capital:</h3>
				<p class="mb-4">{{ capital }}</p>

				<h3 class="font-semibold">Region:</h3>
				<p class="mb-4">{{ region }}</p>

				<h3 class="font-semibold">Rating:</h3>
				<!-- TODO: stars -->
			</div>
			<img
				class="w-2/3"
				:src="getFlag(alpha2Code)"
				:alt="`The map of ${name}.`"
			/>
		</div>
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store, { MutationTypes } from "@/store";

export default defineComponent({
	props: {
		name: String,
		capital: String,
		region: String,
		alpha2Code: String,
		alpha3Code: String
	},

	setup() {
		const getFlag = (alpha2Code: string): string => {
			// require is de manier om via webpack een asset op te halen.
			// De kracht hiervan is dat een require (optioneel) via een loader passeert (optimisation, minify, hashen)
			return require(`@/assets/country-flags/${alpha2Code}.png`);
		};

		return {
			getFlag
		};
	}
});
</script>
