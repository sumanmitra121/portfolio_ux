import React from 'react'
import { Button } from '@mantine/core';
const TDButton = ({btn_title}) => {
  return (
          <Button 
          size={"sm"}
          fullWidth
          >{btn_title}</Button>

  )
}

export default TDButton