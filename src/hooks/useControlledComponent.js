import { useState } from 'react'

const useControlledComponent = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleOnChange = event => {
    setValue(event.target.value)
  }

  return [value, setValue, handleOnChange]
}

export default useControlledComponent
