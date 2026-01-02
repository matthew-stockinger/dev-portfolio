import { createClient, type ClientConfig } from '@sanity/client';

let config: ClientConfig = {
	projectId: 'haorob7o',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2026-01-02'
};

let sanityClient = createClient(config);
export default sanityClient;
