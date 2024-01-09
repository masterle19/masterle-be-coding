import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'hv7xnyy0',
	dataset: 'production',
	apiVersion: '2023-05-03',
	useCdn: false // development
});

export default client;