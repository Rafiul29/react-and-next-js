import React from 'react'

const NumberInput = ({value, onChange, ...rest}) => { 

  const handleChnage=(e)=>{
    const value = e.target.valueAsNumber || 0
    onChange(value)
  }

  return (
   <input type="number" onChange={handleChnage} value={value} {...rest} />
  )
}

export default NumberInput