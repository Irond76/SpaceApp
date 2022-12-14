import React from 'react';
import { useState } from 'react';

const API_KEY = process.env.React_App_Nasa_key;
const URL = process.env.React_App_URL;
const myRandomURL = `${URL}=${API_KEY}&count=6`;

const Nasa = () => {
  // Set My Inital State
  const [spacePics, setSpacePics] = useState([]);

  // Fetch Data from Nasa
  const getSpacePics =  async () => {
    const response = await fetch(myRandomURL);
    const data = await response.json();
  } 
  return (
    <div>
        <h1>Nasa Component</h1>
    </div>
  )
}

export default Nasa