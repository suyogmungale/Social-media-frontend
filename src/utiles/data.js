import { createClient } from "@sanity/client";
import groq from 'groq';
import { useState, useEffect } from 'react';

const clientConfig = {
    projectId:'n7301ijd', 
    dataset: 'production',
    apiVersion:'2021-11-16',
    useCdn: false 
}

export const userQuery = () => {
    return createClient(clientConfig).fetch(groq`
    *[_type == "user"]{
        username,
        image
    }
    `);
}

/* export const userQuery = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getCorgis().then((data) => {
            setItems(data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div>
            {items.map((item) => {
                return (
                    <h1 >{item.image}</h1>
                );
            })}
        </div>
    );
}
*/