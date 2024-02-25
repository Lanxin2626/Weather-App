import React from 'react'
import Date from '../../../Date'
import Name from '../../../Name'
import Temperature from './components/Temperature'
import TemperatureRange from '../../../TemperatureRange'
import WeatherIcon from '../../../WeatherIcon'
import Meta from './components/Meta'
import Image from './components/Image/Image'
import bg from './assets/Cloudy_day_background.png'
import icon from '../../../../components/WeatherIcon/assets/Cloudy.png'
const CurrentCity = () => {
  return (
    <div className='flex flex-col items-center space-y-3'>
      <Image imageURL={bg} alt='cloud' className='absolute top-0 right-0'/>
      <Date value={'20 July Sunday 12:00'} className='text-white'/>
      <Name value={'New York'} className='text-white text-3xl font-bold'/>
      <Temperature value={20} className='text-slate-200 text-8xl font-bold'/>
      <TemperatureRange value={'18 ~ 24'} className='text-white'/>
      <WeatherIcon imgURL={icon}/>
      <Meta/>
    </div>
  )
}

export default CurrentCity
