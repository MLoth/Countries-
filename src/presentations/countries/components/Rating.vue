<template>
	<div class="flex">
		<input
			class="sr-only custom-rating-input"
			:class="{ 'is-active': ratings.rating1 }"
			@change="checkRatingValue($event)"
			name="rating"
			id="rating-1"
			value="1"
			type="radio"
		/>
		<label class="custom-rating-label text-gray-300" for="rating-1">
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
			name="rating"
			id="rating-2"
			:class="{ 'is-active': ratings.rating2 }"
			value="2"
			type="radio"
		/>
		<label class="custom-rating-label text-gray-300" for="rating-2">
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
			name="rating"
			id="rating-3"
			:class="{ 'is-active': ratings.rating3 }"
			value="3"
			type="radio"
		/>
		<label class="custom-rating-label text-gray-300" for="rating-3">
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
			name="rating"
			id="rating-4"
			:class="{ 'is-active': ratings.rating4 }"
			value="4"
			type="radio"
		/>
		<label class="custom-rating-label text-gray-300" for="rating-4">
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
			name="rating"
			id="rating-5"
			:class="{ 'is-active': ratings.rating5 }"
			value="5"
			type="radio"
		/>
		<label class="custom-rating-label text-gray-300" for="rating-5">
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
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
	props: {
		showSmall: {
			type: Boolean,
			default: false
		},

		modelValue: {
			type: String
			// required: true
		}
	},

	setup(props, { emit }) {
		// TODO: move to component.
		const rating1: boolean = false,
			rating2: boolean = false,
			rating3: boolean = false,
			rating4: boolean = false,
			rating5: boolean = false;
		// Object with these booleans -> can maybe be a simple array...
		const ratings: any = {
			rating1,
			rating2,
			rating3,
			rating4,
			rating5
		};

		const setRatingValue = (rating: number) => {
			for (let i = 0; i < Object.keys(ratings).length; i++) {
				if (rating > i) {
					ratings[`rating${i + 1}`] = true;
				} else {
					ratings[`rating${i + 1}`] = false;
				}
			}
		};

		if (props.modelValue) {
			setRatingValue(+props.modelValue);
		}

		const checkRatingValue = (event: Event) => {
			if (event.target instanceof HTMLInputElement) {
				setRatingValue(+event.target.value);
				// Code voor onze (custom) v-model
				emit("update:modelValue", event.target.value);
			}
		};

		return {
			ratings,
			checkRatingValue
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
</style>
