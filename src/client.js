import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'n7301ijd', // Replace with your project ID
  dataset: 'production',
  apiVersion:'2021-11-16',
  useCdn: true,
  token:'skL2896ewyhXphX95BUz5PY3NX9TKKnHiVYPb4ywMVdhOWgpAMpk5NdmhvIpZdeCsm0aB9pQWRFPn9HhjrLMQK0gR1gEWt6o4VmzMLxRHCOgvH0PiUFHnETX8RnwiA1QmxILkOdgOkrHeQO1TJyRr632360dPIlJIowH68T7zf9JNBuyvnfB',
  ignoreBrowserTokenWarning: true       
});

export default client;
