import exampleData from "$lib/data/data.json";

export const load = async () => {
	return {
		jobs: exampleData,
	}
};