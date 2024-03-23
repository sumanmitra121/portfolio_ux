import React from 'react'
import { TextInput } from '@mantine/core';
const TDInput = ({label,placeholder,desc}) => {
  return (
    <div className='w-full'>
      <TextInput
      size="sm"
      label={label}
      description={desc}
      placeholder={placeholder}
      />
    </div>
  )
}

export default TDInput
