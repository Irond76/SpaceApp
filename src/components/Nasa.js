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
  }, []);

  const refreshPageButton = () => {
    window.location.reload();
  }
  return (
    <>
    {
      spacePics.map((item) => {
        const {date, copyright,explanation, hdurl, title, url} = item;
        return (
          <div className='container'key={hdurl}>
              <div className='card'>
                  <div><h2 className='title'>{title}</h2></div>
                  <div><h3 className='author'>Photo Credit: {copyright}</h3></div>
                  <div><p className='date'>{date}</p></div>
                  <div><p className='text'>{explanation}</p></div>
                  <div><img src={url} alt="random nasa space images" className='image'/></div>
              </div>
          </div>
        )
      })
    }
    <button className='image-btn'type='button'onClick={refreshPageButton}>Refresh Images</button>
    </>
  )
}

export default Nasa;
