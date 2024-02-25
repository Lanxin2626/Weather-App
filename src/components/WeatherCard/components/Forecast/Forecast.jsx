import React from 'react'
import DayOfWeek from './components/DayOfWeek/DayOfWeek'

const Forecast = () => {
  return (
    <div className='flex flex-initial items-center p-4 space-x-6'>
      <DayOfWeek/>
      <DayOfWeek/>
      <DayOfWeek/>
      <DayOfWeek/>
    </div>
  )
}

export default Forecast
