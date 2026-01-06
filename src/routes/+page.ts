import sanityClient from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export let load: PageLoad = async () => {
	let workExperience: SanityWorkExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);

	let rawProjects: SanityProject[] = await sanityClient.fetch('*[_type == "project"]');
	console.log(rawProjects);

	let projects = rawProjects.map(processProjectEntries);


	return {
		workExperience,
	};
};
