import React from 'react'
import Name from '../../../../../Name'
import Date from '../../../../../Date'
import WeatherIcon from '../../../../../WeatherIcon'
import TemperatureRange from '../../../../../TemperatureRange'

const DayOfWeek = () => {
  return (
    <div>
      <Name/>
      <Date/>
      <WeatherIcon/>
      <TemperatureRange/>
    </div>
  )
}

export default DayOfWeek
