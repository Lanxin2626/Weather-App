import React from 'react'

const WeatherIcon = ({imgURL,alt='this is a weather icon',className}) => {
  return (
    <img src={imgURL}
    alt={alt}
    className={className}/>
  )
}

export default WeatherIcon
