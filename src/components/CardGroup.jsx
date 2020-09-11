import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const mapStateToProps = (state) => ({
  cards: state.cards,
})

const CardGroup = ({ cards }) => {
  return (
    <div className="card-group">
      {cards && cards.length > 0
        ? cards.map((card, idx) => (
            <Card key={idx} text={card.text} type={card.type} />
          ))
        : null}
    </div>
  )
}

export default connect(mapStateToProps)(CardGroup)
