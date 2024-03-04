import React from 'react'

const TemperatureRange = ({value,className}) => {
  return (
    <div className={className}>
      {value}°
    </div>
  )
}

export default TemperatureRange
