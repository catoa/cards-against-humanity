import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCard } from './store'
import CardGroup from './components/CardGroup'
import './App.css'

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  addCard,
})

function App({ dispatch, addCard }) {
  const [cardText, setCardText] = useState('')
  const [isPrompt, setIsPrompt] = useState(false)

  return (
    <div className="App">
      <main>
        <CardGroup />
        <input
          type="text"
          value={cardText}
          onChange={(event) => setCardText(event.target.value)}
        />
        <br />
        <span>
          <input
            type="checkbox"
            value={isPrompt}
            onClick={() => setIsPrompt(!isPrompt)}
          />
          Prompt Card
        </span>
        <br />
        <button
          onClick={() => {
            let trimmedText = cardText.trim()
            if (trimmedText.length > 0) {
              dispatch(
                addCard({
                  text: trimmedText,
                  type: isPrompt ? 'black' : 'white',
                })
              )
              setCardText('')
            }
          }}
        >
          Add
        </button>
      </main>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(App)
