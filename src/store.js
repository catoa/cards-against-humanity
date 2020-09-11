import { createStore } from 'redux'

const initialState = {
  cards: [],
}

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      return {
        ...state,
        cards: state.cards.concat(action.content),
      }
    }
    default:
      return state
  }
}

export const addCard = (content) => ({
  type: 'ADD_CARD',
  content,
})

export default createStore(cardsReducer)
