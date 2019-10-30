import { useEffect, useRef } from 'react'

const useWebSocket = (url, onMessageHandler) => {
  const socket = useRef()

  const savedMessageHandler = useRef()

  useEffect(() => {
    savedMessageHandler.current = onMessageHandler
  }, [onMessageHandler])

  useEffect(() => {
    socket.current = new WebSocket(url)

    const onMessageListener = event => savedMessageHandler.current(event)

    socket.current.onmessage = onMessageListener

    socket.current.onopen = () => console.log('Connected to socket at', url)

    socket.current.onclose = () => console.log('Disconnected from socket at', url)

    return () => {
      socket.current.close()
    }
  }, [url])

  const send = message => {
    socket.current.send(message)
  }

  return { send }
}

export default useWebSocket
