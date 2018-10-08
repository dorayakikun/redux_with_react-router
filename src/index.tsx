import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { App } from './containers/App'
import { SubApp } from './containers/SubApp'
import { reducer } from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path={'/'} component={App} />
        <Route path={'/sub'} component={SubApp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
