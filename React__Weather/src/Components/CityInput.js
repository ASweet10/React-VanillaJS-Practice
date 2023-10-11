import React from 'react'

const CityInput = (props) => {

  const onClickHandler = async (e) => {
    e.persist()
    
  }
  
  return (
    <input 
      className='w-96 inline-block py-2 px-4 relative border-8 outline-none text-lg'
      type="text"
      placeholder="Please enter a city"
      OnChange={onClickHandler}
    />
  )
}

export default CityInput