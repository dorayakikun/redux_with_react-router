import * as React from 'react'

export interface Props {
  value: number
}

export const Status = (props: Props) => <p>Current value is {props.value}</p>
