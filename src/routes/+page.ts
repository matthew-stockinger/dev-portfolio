import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export let load: PageLoad = async () => {
	let workExperience: SanityWorkExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);

	let rawProjects: SanityProject[] = await sanityClient.fetch('*[_type == "project"]');
	let projects = rawProjects.map(processProjectEntries);

	console.log("before transformation");
	console.log(rawProjects[0]);
	console.log("after");
	console.log(projects[0]);

	return {
		workExperience
	};
};
