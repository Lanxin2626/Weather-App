import React from 'react'
import Input from '../SearchBar/components/Input'
import Button from '../SearchBar/components/Button'
const SearchBar = () => {
  return (
    <div className='flex space-x-3 w-9/12'>
      <Input/>
      <Button/>
    </div>
  )
}

export default SearchBar
