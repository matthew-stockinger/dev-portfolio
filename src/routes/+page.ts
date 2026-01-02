import type { DevExperience } from '$lib/types/sanity';
import sanityClient from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export let load: PageLoad = async () => {
	let workExperience: DevExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);

	return {
		workExperience
	};
};
