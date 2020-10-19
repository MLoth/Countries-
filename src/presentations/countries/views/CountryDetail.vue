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
					{{ state.country.name }}
					<span class="">({{ state.country.nativeName }})</span>
				</h1>

				<div class="flex">
					<div class="w-1/2 pr-4">
						<h2 class="text-xl font-semibold">Reviews</h2>

						<h3 class="text-lg font-semibold">
							What otters 🦦 think about visiting
							{{ state.country.name }}
						</h3>
						<div
							v-for="review of reviews"
							:key="review.title"
							class="mb-6"
						>
							<h3 class="text-lg font-semibold">
								{{ review.title }} -
								<span>TODO: {{ review.rating }}/5</span>
							</h3>
							<p>{{ review.description }}</p>
						</div>

						<h2 class="text-xl font-semibold mt-6">
							Share your thoughts:
						</h2>
						<form>
							<label
								class="block font-semibold mt-2 mb-2"
								for="title"
								>Title</label
							>
							<input
								v-model="newReview.title"
								class="w-full py-2 px-4 bg-gray-200"
								type="text"
								name=""
								placeholder="Title of your review"
								id="title"
							/>

							<label
								class="block font-semibold mt-2 mb-2"
								for="experience"
								>Your experience</label
							>
							<textarea
								v-model="newReview.description"
								class="w-full py-2 px-4 bg-gray-200"
								name=""
								placeholder="Give a concise review."
								id="experience"
								cols="30"
								rows="10"
							></textarea>

							<label class="block font-semibold mt-2 mb-2" for=""
								>Rating</label
							>
							<!-- Rating -->
							<!-- TODO: v-model="newReview.rating" -->
							<Rating v-model="newReview.rating" />

							<button
								@click="addNewReview($event)"
								class="text-white bg-alpha px-4 py-2 mt-6"
							>
								Post review
							</button>
						</form>
					</div>
					<aside class="w-1/2 pl-4">
						<h2 class="text-xl font-semibold">
							{{ state.country.name }}
						</h2>

						<img
							class="h-6 rounded-md my-3"
							:src="state.country.flag"
							:alt="`The flag of ${state.country.name}.`"
						/>

						<p>
							{{ state.country.name }} is located in
							{{ state.country.region }} ({{
								state.country.subregion
							}}) and the capital is {{ state.country.capital }}.
						</p>
						<p>
							There are
							{{ state.country.population.toLocaleString() }} of
							people living in {{ state.country.name }}.
						</p>

						<img
							:src="getCountryContour(state.country.alpha2Code)"
							:alt="
								`The contour of the state of ${state.country.name}`
							"
						/>

						<p>
							<a
								class="text-alpha underline opacity-100 hover:opacity-50"
								:href="
									`https://www.google.com/maps/place/${state.country.name}`
								"
								>View {{ state.country.name }}</a
							>
							on google Maps.
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
import {
	computed,
	defineComponent,
	onMounted,
	reactive,
	ref,
	Ref,
	toRef,
	toRefs
} from "vue";
import route from "@/router";
import store from "@/store";

import Rating from "../components/Rating.vue";

import Review from "@/models/Review";
import { MutationTypes } from "@/store";
import { get } from "@/utils/api";

export default defineComponent({
	components: {
		Rating
	},

	setup() {
		const newReview: Review = reactive({
			title: "",
			description: "",
			rating: 0
		});

		const reviews = computed(() =>
			store.getters.getReviewsByCountryCode(
				(currentRoute.value as string).toLowerCase()
			)
		);

		// Get the current route in the setup (start).
		const currentRoute: Ref<string | string[]> = ref(
			route.currentRoute.value.params.countryCode
		);
		const state = reactive({
			country: null
		});

		const getCountryDetails = async () => {
			const countryDetails = await get(`alpha/${currentRoute.value}`);
			state.country = countryDetails;
		};

		const getCountryContour = (alphaCode: string): string => {
			return require(`@/assets/country-flags/${alphaCode}.png`);
		};

		getCountryDetails();

		const addNewReview = (event: MouseEvent) => {
			event.preventDefault();

			if (newReview.title && newReview.description) {
				store.commit(MutationTypes.ADD_REVIEW_TO_COUNTRY, {
					country: currentRoute.value,
					review: newReview
				});
			}
		};

		return {
			currentRoute,
			state,
			getCountryContour,

			newReview,

			addNewReview,

			reviews
		};
	}
});
</script>
