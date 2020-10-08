const baseUrl = 'https://restcountries.eu/rest/v2';

export const get = (endpoint: string): any => {
	// try {
	return fetch(`${baseUrl}/${endpoint}`)
		.then((r) => r.json())
		.catch((err: any) => err);
	// } catch (error) {
	// 	return new Error(error);
	// }
};
