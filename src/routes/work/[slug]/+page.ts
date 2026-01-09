import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export let load: PageLoad = async ({ params }) => {
	let { slug } = params;

	let rawProjects: SanityProject[] = await sanityClient.fetch(
		`*[_type == "project" && slug == $slug]`,
		{ slug }
	);

	if (rawProjects.length !== 1) {
		throw error(404, 'Project not found');
	}
	let project = processProjectEntries(rawProjects[0]);

	return { project };
};
