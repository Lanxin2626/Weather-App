import React from 'react'
import rain from './assets/Rain.png'
import cloud from './assets/Cloudy.png'
import snow from './assets/Snow.png'
import sunny from './assets/Sunny.png'
import hail from './assets/Hail.png'

const WeatherIcon = ({imgURL,alt='this is a weather icon',className}) => {
  let imgSrc= cloud;
  switch(imgURL)
  {
    case 'rain':
      imgSrc= rain;
      break;
    case 'sunny':
      imgSrc= sunny;
      break;
    case 'cloud':
      imgSrc= cloud;
      break;
    case 'hail':
      imgSrc =hail;
      break;
    case 'snow':
      imgSrc =snow;
      break;

  }
  return (

      <img src={imgSrc}
      alt={alt}
      className={className}/>

  )
}

export default WeatherIcon
