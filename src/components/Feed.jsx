import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import client from '../client'
//import data from '../utiles/data';
import MasonaryLayout from './MasonaryLayout';
import Spiner from './Spiner';
const Feed = () => {
  const [loading, setLoading] = useState(false)

  if(loading) return <Spiner message='we are adding new ideas to yoour feed!' />
  return (
    <div>Feed</div>
  )
}

export default Feed