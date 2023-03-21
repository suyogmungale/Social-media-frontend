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

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };

  
  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;