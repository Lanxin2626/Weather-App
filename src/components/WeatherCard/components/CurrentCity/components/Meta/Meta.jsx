import React from 'react'
import MetaItem from './components/MetaItem'
import humidity from './assets/humidity.svg'
import airQuality from './assets/PM2.5.svg'
import wind from './assets/wind_speed.svg'
import somatosensory from './assets/Somatosensory.svg'
const Meta = () => {
  return (
    <div className='flex justify-between bg-slate-50 rounded-2xl w-5/6 p-4'>
      <MetaItem imageURL={wind} value={'9km/h'} alt={'wind icon'}/>
      <MetaItem imageURL={humidity} value={'85%'} alt={'humidity icon'}/>
      <MetaItem imageURL={airQuality} value={'75ug'} alt={'Air Quality icon'}/>
      <MetaItem imageURL={somatosensory}value={'26°'} alt={'Somatosensory icon'} />
    </div>
  )
}

export default Meta
