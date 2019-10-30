import React, { useState, useCallback } from "react";
import useWebSocket from "../hooks/useWebSocket";

const Socket = () => {
  const [messages, setMessages] = useState([])

  const onMessageHandler = useCallback(e => {
    setMessages(messages => [...messages, e.data])
  }, [setMessages])

  const { send } = useWebSocket('ws://demos.kaazing.com/echo', onMessageHandler)

  return (
    <div>
      <button onClick={() => { send('HELLO! MY NAME IS JOE! AND I LIVE IN A BUTTON FACTORY!') }}>😈</button>
      <h2>Messages</h2>
      {messages.map((m, i) => <div key={i}>{m}</div>)}
    </div>
  )
}

export default Socket;
