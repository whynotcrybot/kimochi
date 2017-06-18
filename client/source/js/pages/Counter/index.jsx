import React from 'react'
import { connect } from 'react-redux'
import { countUp, countDown } from 'ducks/counter'

import { Flex, Box } from 'reflexbox'

const Counter = function (props) {
  return (
    <Flex justify='center'>
      <Box col={8}>
        <h1>{'Redux Counter'}</h1>
        <p>
          {`
            We already counted ${props.counter.counts}
            and have a current value of ${props.counter.counter}
          `}
        </p>
        <button onClick={props.countUp}>{'count up'}</button>
        <button onClick={props.countDown}>{'count down'}</button>
      </Box>
    </Flex>
  )
}

export default connect(
  function (state) {
    return {
      counter: state.counter
    }
  },
  function (dispatch) {
    return {
      countUp: () => dispatch(countUp()),
      countDown: () => dispatch(countDown())
    }
  }
)(Counter)
