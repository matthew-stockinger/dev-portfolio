import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

let config: ClientConfig = {
	projectId: 'haorob7o',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2026-01-02'
};

let sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
	let builder = imageUrlBuilder(sanityClient);
	let projectImageUrl = builder.image(rawProject.image).url();
	let processedProject: ProcessedProject = {
		name: rawProject.name,
		company: rawProject.company,
		dateAccomplished: rawProject.dateAccomplished,
		stack: rawProject.stack,
		slug: rawProject.slug,
		projectImageUrl,
		content: rawProject.content.map(processProjectContent)
	};

	return processedProject;
}

function processProjectContent(content: RawTextcontent | RawImageContent) {
	if (content._type === 'block') {
		// processed text content
		let processedTextContent: ProcessedTextContent = {
			type: 'text',
			style: content.style,
			textToRender: content.children.map((elem) => elem.text).join('\n')
		};
		return processedTextContent;
	} else {
		// processed image content
		let builder = imageUrlBuilder(sanityClient);
		let projectImageUrl = builder.image(content).url();
		let processedImage: ProcessedImageContent = {
			type: 'image',
			url: projectImageUrl
		};
		return processedImage;
	}
}
