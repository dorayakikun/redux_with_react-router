import * as React from 'react'

export interface Props {
  value: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export const Counter = (props: Props) => (
  <p>
    Clicked: {props.value} times{' '}
    <button onClick={props.handleIncrement}>+</button>{' '}
    <button onClick={props.handleDecrement}>-</button>
  </p>
)
