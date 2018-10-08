export enum ActionKeys {
  INCREMENT = 'app/increment',
  DECREMENT = 'app/decrement',
}

interface IncrementAction {
  readonly type: ActionKeys.INCREMENT
}

interface DecrementAction {
  readonly type: ActionKeys.DECREMENT
}

export type Action = IncrementAction | DecrementAction

export const reducer = (state: number = 0, action: Action) => {
  switch (action.type) {
    case ActionKeys.INCREMENT:
      return state + 1
    case ActionKeys.DECREMENT:
      return state - 1
    default:
      return state
  }
}
