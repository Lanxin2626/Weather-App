import React from 'react'
import Name from '../../../../../Name'
import Date from '../../../../../Date'
import WeatherIcon from '../../../../../WeatherIcon'
import TemperatureRange from '../../../../../TemperatureRange'
import rain from '../../../../../../assets/weather_icon/Rain.png'

const DayOfWeek = () => {
  return (
    <div>
      <Name value='Monday' className={'font-bold text-center'}/>
      <Date value={'24 July'} className={'text-center'}/>
      <WeatherIcon imgURL={'rain'} alt='weather-icon' className={'text-center '}/>
      <TemperatureRange value={'24-30'} className={'text-center'}/> 
    </div>
  )
}

export default DayOfWeek
