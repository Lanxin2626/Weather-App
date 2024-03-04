import React from 'react'
import WeatherIcon from '../../../../WeatherIcon'
import Name from '../../../../Name'
import TemperatureRange from '../../../../TemperatureRange'
import London from './assets/London.png'
import Shanghai from './assets/Shanghai.png'
import Sydney from './assets/Sydney.png'
import NewYork from './assets/Newyork.png'

const City = ({cityName, className}) => {
  let cityImage='';
  switch(cityName)
  {
    case 'London':
      cityImage=London;
      break;
    case 'Shanghai':
      cityImage=Shanghai;
      break;
    case 'Sydney':
      cityImage=Sydney;
      break;
    case 'NewYork':
      cityImage=NewYork;
      break;
  }
  const backgroundStyle = {
    backgroundImage: `url(${cityImage})`,
    backgroundSize: 'contain', // 保持图像宽度为100%，高度自适应
    backgroundRepeat: 'no-repeat',
    //backgroundPosition: 'center' ,// 背景图像居中显示
    margin:0,
  };
  return (
    <div style={backgroundStyle} className={'row-span-1 col-span-1 flex flex-col justify-center'}>  
    <WeatherIcon className={'size-12 '}/>
      <Name value={cityName} />
      <TemperatureRange value={'20-30'}/>
    </div>
  )
}

export default City
