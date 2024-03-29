// import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
    projectId: '65xpaikk',
    dataset: 'production',
    apiVersion: '2023-02-22',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);