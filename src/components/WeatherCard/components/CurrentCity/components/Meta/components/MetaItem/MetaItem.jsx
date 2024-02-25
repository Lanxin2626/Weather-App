import React from 'react'

const MetaItem = ({imageURL,alt, value}) => {
  return (
    <div className='flex flex-col justify-center'>
        <img src={imageURL} alt={alt} className='w-6 h-6'/>
        {value}
    </div>
  )
}

export default MetaItem
