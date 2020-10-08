<template>
	<main class="w-full max-w-6xl mx-auto px-4 py-6">
		<!-- ok -->
		<div v-if="state.country">
			<!-- If status is present, something went wrong -->
			<div v-if="state.country.status">
				<p>Oeps, no data for this code ({{ currentRoute }}).</p>
			</div>
			<div v-else>
				<h1 class="text-3xl font-bold mb-6">
					{{ state.country.name }} <span class="">({{ state.country.nativeName }})</span>
				</h1>

				<div class="flex">
					<div class="w-1/2">
						<h2 class="text-xl font-semibold">Reviews</h2>

						<h3 class="text-lg font-semibold">What otters 🦦 think about visiting {{ state.country.name }}</h3>

						<h2 class="text-xl font-semibold">Share your thoughts:</h2>
						<label class="block" for="title">Title</label>
						<input type="text" name="" id="title" />

						<label class="block" for="experience">Your experience</label>
						<textarea name="" id="experience" cols="30" rows="10"></textarea>

						<label class="block" for="">Rating</label>
						<!-- Rating -->

						<button class="">
							Post review
						</button>
					</div>
					<aside class="w-1/2">
						<h2 class="text-xl font-semibold">{{ state.country.name }}</h2>

						<img class="h-8 rounded-md my-3" :src="state.country.flag" :alt="`The flag of ${state.country.name}.`" />

						<p>{{ state.country.name }} is located in {{ state.country.region }} ({{ state.country.subregion }}) and the capital is {{ state.country.capital }}.</p>
						<p>There are {{ state.country.population.toLocaleString() }} of people living in {{ state.country.name }}.</p>

						<img :src="getCountryContour(state.country.alpha2Code)" :alt="`The contour of the state of ${state.country.name}`" />

						<p>
							<router-link :to="`https://maps.google.com/place/${state.country.name}`">View {{ state.country.name }}</router-link> on google Maps.
						</p>
					</aside>
				</div>
			</div>
		</div>
		<div v-else>
			<!-- Aan het laden (ghosts) -->
			<p>Loading...</p>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, toRef, toRefs, reactive } from 'vue';
import route from '@/router';
import { get } from '@/utils/api';

export default defineComponent({
	setup() {
		// Get the current route in the setup (start).
		const currentRoute: Ref<string | string[]> = ref(route.currentRoute.value.params.countryCode);
		const state = reactive({
			country: null,
		});

		const getCountryDetails = async () => {
			const countryDetails = await get(`alpha/${currentRoute.value}`);

			// setTimeout(() => {
			state.country = countryDetails;
			console.log(countryDetails);
			// }, 1500);
		};

		const getCountryContour = (alphaCode: string): string => {
			return require(`@/assets/country-flags/${alphaCode}.png`);
		};

		getCountryDetails();

		return {
			currentRoute,
			state,
			getCountryContour,
		};
	},
});
</script>
