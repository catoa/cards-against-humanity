import React, { useState } from 'react'

const Card = ({ type, text }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={`card ${type}`} onClick={() => setFlipped(!flipped)}>
      {flipped ? text : <h1>Cards Against Humanity</h1>}
    </div>
  )
}

export default Card
