import { createClient } from '@sanity/client';

const projectid = process.env.REACT_APP_SANITY_PROJECT_ID;
const token = process.env.REACT_APP_SANITY_PROJECT_TOKEN;

console.log(projectid);
console.log(token);


const client = createClient({
  projectId:projectid, // Replace with your project ID
  dataset: 'production',
  apiVersion:'2021-11-16',
  useCdn: true,
  token:token,
  ignoreBrowserTokenWarning: true       
});

export default client;
