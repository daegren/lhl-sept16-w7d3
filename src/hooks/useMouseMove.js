import { useState, useCallback } from 'react'
import useEventHandler from './useEventHandler'

const useMouseMove = (element = document.body) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const mouseMoveHandler = useCallback(e => {
    setCoords({ x: e.clientX, y: e.clientY })
  }, [setCoords])

  useEventHandler('mousemove', mouseMoveHandler, element)

  return coords
}

export default useMouseMove
