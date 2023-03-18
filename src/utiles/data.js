import sanityClient from '@sanity/client'
import client from '../client'

export const useQuery =  (userId) => {
    const query = `*[_type == 'user' && username == '${userId}']`;

return query


}   
//const query = `*[_type == 'user' && username == '${name}']`;

    /*const query = `*[_type == "user"] {
        _id,
        image,
        username
      }`

    try {
        const data = await client.fetch(query);
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(data)
        return data;
    } catch (error) {
        // Handle any errors
        console.error(error)
    }

} */

