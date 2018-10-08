import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Counter } from '../components/Counter'
import { Action, ActionKeys } from '../reducers'

const mapStateToProps = (state: number) => ({ value: state })
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  handleIncrement: () => {
    dispatch({ type: ActionKeys.INCREMENT })
  },
  handleDecrement: () => {
    dispatch({ type: ActionKeys.DECREMENT })
  },
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export const App = connector(Counter)
