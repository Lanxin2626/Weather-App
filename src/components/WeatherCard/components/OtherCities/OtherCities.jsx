import React from 'react'
import City from './City'


const OtherCities = () => {
  return (
    <div className=' grid  grid-cols-4 grid-row-1 justify-center'>
      <City cityName='London' />
      <City cityName='Sydney' />
      <City cityName='Shanghai'/>
      <City cityName='NewYork'/>
    </div>
  )
}

export default OtherCities
