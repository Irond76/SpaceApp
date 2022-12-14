import React from 'react';
import { useState, useEffect } from 'react';

const API_KEY = process.env.React_App_Nasa_key;
const URL = process.env.React_App_URL;
const myRandomURL = `${URL}=${API_KEY}&count=6`;

const Nasa = () => {
  // Set My Inital State
  const [spacePics, setSpacePics] = useState([]);

  // Fetch Data from Nasa Function
  const getSpacePics =  async () => {
    const response = await fetch(myRandomURL);
    const data = await response.json();
    setSpacePics(data);
    console.log(data)
  } 
//  calling the api
  useEffect(()=> {
    getSpacePics();
  }, [])
  return (
    <>
    {
      spacePics.map((item) => {
        const {date, copyright,explanation, hdurl, title, url} = item;
        return (
          <div>
            <h2>{title}</h2>
            <h3>Photo Credit: {copyright}</h3>
            <p>{date}</p>
            <p>{explanation}</p>
            <img src={url} alt="random nasa space images" />
          </div>
        )
      })
    }
    </>
  )
}

export default Nasa