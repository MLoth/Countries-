import { createStore } from 'vuex'

import Review from '@/models/Review';

export type State = {
	[reviews: string]: {[countryCode: string]: Array<Review>}
}

// MUTATIONS
export enum MUTATIONS {
	ADD_REVIEW_TO_COUNTRY = 'addReviewToCountry',
}

export type countryReviewPayload = {
	country: string;
	review: Review
}

export type Mutations<S = State> = {
  [MUTATIONS.ADD_REVIEW_TO_COUNTRY](state: S, payload: countryReviewPayload): void
}

const state: State = {
	reviews: localStorage.countryReviews ? JSON.parse(localStorage.countryReviews) : {}
}

export default createStore({
  state: state,

  getters: {
	getReviewsByCountryCode: state => (countryCode: string) => {
		return state.reviews[countryCode] ? state.reviews[countryCode] : [];
	}
  },

  mutations: {
		[MUTATIONS.ADD_REVIEW_TO_COUNTRY](state, {country, review}) {
		const countryKey = country.toLowerCase();
		// Kopie van maken zorgt ervoor dat de reactivity verloren gaat (hier willen we dat ;-))
		const r: Review = {
			title: review.title,
			description: review.description,
			rating: review.rating
		};


		  if (state.reviews.hasOwnProperty(countryKey)) {
			  state.reviews[countryKey].push(r);
		  } else {
			  state.reviews[countryKey] = [r];
		  }
		  localStorage.setItem('countryReviews', JSON.stringify(state.reviews));
		  console.log(state);
		  
	  }
  },

  actions: {
  },
})
