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
							<!-- TODO: make component -->
							<!-- <Rating v-model="newReview.rating" /> -->

							<div class="flex">
								<input
									class="sr-only custom-rating-input"
									@change="checkRatingValue($event)"
									v-model="newReview.rating"
									name="rating"
									id="rating-1"
									value="1"
									type="radio"
									ref="rating1"
								/>
								<label
									class="custom-rating-label text-gray-300"
									for="rating-1"
								>
									<svg
										class="custom-rating-symbol stroke-current w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<polygon
											points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
										></polygon>
									</svg>
								</label>
								<input
									class="sr-only custom-rating-input"
									@change="checkRatingValue($event)"
									v-model="newReview.rating"
									name="rating"
									id="rating-2"
									ref="rating2"
									value="2"
									type="radio"
								/>
								<label
									class="custom-rating-label text-gray-300"
									for="rating-2"
								>
									<svg
										class="custom-rating-symbol stroke-current w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<polygon
											points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
										></polygon>
									</svg>
								</label>
								<input
									class="sr-only custom-rating-input"
									@change="checkRatingValue($event)"
									v-model="newReview.rating"
									name="rating"
									id="rating-3"
									ref="rating3"
									value="3"
									type="radio"
								/>
								<label
									class="custom-rating-label text-gray-300"
									for="rating-3"
								>
									<svg
										class="custom-rating-symbol stroke-current w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<polygon
											points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
										></polygon>
									</svg>
								</label>
								<input
									class="sr-only custom-rating-input"
									@change="checkRatingValue($event)"
									v-model="newReview.rating"
									name="rating"
									id="rating-4"
									ref="rating4"
									value="4"
									type="radio"
								/>
								<label
									class="custom-rating-label text-gray-300"
									for="rating-4"
								>
									<svg
										class="custom-rating-symbol stroke-current w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<polygon
											points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
										></polygon>
									</svg>
								</label>
								<input
									class="sr-only custom-rating-input"
									@change="checkRatingValue($event)"
									v-model="newReview.rating"
									name="rating"
									id="rating-5"
									ref="rating5"
									value="5"
									type="radio"
								/>
								<label
									class="custom-rating-label text-gray-300"
									for="rating-5"
								>
									<svg
										class="custom-rating-symbol stroke-current w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<polygon
											points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
										></polygon>
									</svg>
								</label>
							</div>

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

import Review from "@/models/Review";
import { MUTATIONS } from "@/store";
import { get } from "@/utils/api";

export default defineComponent({
	setup() {
		// TODO: move to component.
		const rating1 = ref(null);
		const rating2 = ref(null);
		const rating3 = ref(null);
		const rating4 = ref(null);
		const rating5 = ref(null);

		const newReview: Review = reactive({
			title: "",
			description: "",
			rating: 0
		});

		const ratings = [rating1, rating2, rating3, rating4, rating5];

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

		const checkRatingValue = (event: MouseEvent) => {
			//@ts-ignore
			if (event.target && event.target.value) {
				// @ts-ignore
				for (let i = 0; i < ratings.length; i++) {
					// @ts-ignore
					if (event.target.value > i) {
						// @ts-ignore
						ratings[i].value.classList.add("is-active");
					} else {
						// @ts-ignore
						ratings[i].value.classList.remove("is-active");
					}
				}
			}
		};

		const addNewReview = (event: MouseEvent) => {
			event.preventDefault();

			if (newReview.title && newReview.description) {
				store.commit(MUTATIONS.ADD_REVIEW_TO_COUNTRY, {
					country: currentRoute.value,
					review: newReview
				});
			}
		};

		// DOM is added - test
		// onMounted(() => {
		// 	console.log(ratings);
		// });

		return {
			currentRoute,
			state,
			getCountryContour,
			checkRatingValue,

			ratings,
			rating1,
			rating2,
			rating3,
			rating4,
			rating5,

			newReview,

			addNewReview,

			reviews
		};
	}
});
</script>

<style lang="scss" scoped>
.custom-rating-input {
	&:checked,
	&.is-active {
		& + .custom-rating-label {
			@apply text-yellow-400;
		}
	}

	&:focus {
		& + .custom-rating-label .custom-rating-symbol {
			// TODO: unexpected shadow (not around symbol / svg)
			// @apply shadow-xl;
			// filter: drop-shadow(0 1px 2px 6px #f6e05e);
		}
	}
}
.custom-rating-label {
}
.custom-rating-symbol {
}
</style>
