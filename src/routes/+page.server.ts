import exampleData from "$lib/data/data.json";

export const load = async () => {
	const jobs = exampleData;

	const percentageWithoutSalary = Math.floor(jobs.filter((job) => job.salaryFrom === 'N/A').length / jobs.length * 100);

	return {
		percentageWithoutSalary,
	}
};