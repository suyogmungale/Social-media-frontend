import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const projectid = process.env.REACT_APP_SANITY_PROJECT_ID;
const token = process.env.REACT_APP_SANITY_PROJECT_TOKEN;




export const client = createClient({
  projectId:projectid, 
  dataset: 'production',
  apiVersion:'2021-11-16',
  useCdn: true,
  token:token,
  ignoreBrowserTokenWarning: true       
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
