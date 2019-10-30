import { useEffect, useRef } from 'react'

const useEventHandler = (eventName, handler, element = document.body) => {
  const eventHandler = useRef()

  useEffect(() => {
    eventHandler.current = handler
    console.log('setting event handler')
  }, [handler])

  useEffect(() => {
    const eventListener = event => eventHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [element, eventName])
}

export default useEventHandler
