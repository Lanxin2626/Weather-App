import React from 'react'
import CurrentCity from './components/CurrentCity/CurrentCity'
import Forcast from './components/Forecast/Forecast'
import SearchBar from './components/SearchBar/SearchBar'
import OtherCities from './components/OtherCities/OtherCities'

const WeatherCard = () => {
  return (
    <div className='w-4/5 h-4/5 mx-auto rounded-3xl bg-white overflow-hidden shadow-blue-500 grid grid-cols-6 grid-row-6 gap-6'>
      <div className='row-span-6 col-span-2 m-6 p-8 rounded-3xl relative'            
           style={{
            backgroundImage:
              "linear-gradient(152deg, #899bf0 1%, #3f55e4 54%, #3f55e4 96%)",
          }}>
      <CurrentCity/>
      </div>
      <div className='row-span-3 col-span-4 border-8 m-6'>
      <Forcast/>
      </div>
      <div  className='row-span-1 col-span-4 border-8 m-6'>
      <SearchBar/>
      </div>
      <div  className='row-span-2 col-span-4 border-8 m-6'>
      <OtherCities/>
      </div>
    </div>
  )
}

export default WeatherCard
