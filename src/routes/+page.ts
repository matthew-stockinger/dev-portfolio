import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export let load: PageLoad = async () => {
	let workExperience: SanityWorkExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);
	let rawProjects: SanityProject[] = await sanityClient.fetch(
		'*[_type == "project"] | order(dateAccomplished desc)'
	);
	let skills: Skill[] = await sanityClient.fetch(`*[_type == 'skills'][0].skillsList`);

	let projects = rawProjects.map(processProjectEntries);
	return {
		workExperience,
		projects,
		skills
	};
};
