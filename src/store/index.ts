import { createStore } from 'vuex'

// TODO: make interface
// TODO: make model

export default createStore({
  state: {
	  // @ts-ignore
      reviews: {}
  },

  getters: {
	// @ts-ignore
	getReviewsByCountryCode: state => (countryCode: string) => {
		console.log({countryCode});
		
		// @ts-ignore
		return state.reviews[countryCode] ? state.reviews[countryCode] : [];
	}
  },

  mutations: {
	  addReviewToCountry(state, {country, review}) {
		const countryKey = country.toLowerCase();

		// @ts-ignore
		  if (state.reviews.hasOwnProperty(countryKey)) {
			//   @ts-ignore
			  state.reviews[countryKey].push(review);
		  } else {
			//   @ts-ignore
			  state.reviews[countryKey] = [review];
		  }
		  console.log(state);
		  
	  }
  },

  actions: {
  },
})
