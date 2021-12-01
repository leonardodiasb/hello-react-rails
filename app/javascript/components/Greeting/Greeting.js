import React, { useState, useEffect } from "react"
import axios from 'axios'

const Greeting = () => {

  const [greeting, setGreeting] = useState([])

  useEffect(() => {

    axios.get('/api/v1/messages.json')
    .then( resp => {
      setGreeting(resp.data)
    } )
    .catch( resp => console.log(resp) )
  }, [greeting.length])
  
  return (
    <div>
      <p>This is a random greeting:</p>
      <p>{greeting.greeting}</p>
    </div>
  )
}

export default Greeting