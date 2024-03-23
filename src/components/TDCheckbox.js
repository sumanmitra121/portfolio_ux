import React from 'react'
import { Checkbox } from '@mantine/core';

const TDCheckbox = ({label}) => {
  return (
          <Checkbox
                    defaultChecked
                    label={label}
                    radius="xs"
                    size="xs"
        />
  )
}

export default TDCheckbox