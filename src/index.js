import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import Async from './middleware/async'

import App from './containers/app'
import reducers from './reducers'

const createStoreWithMiddleWare = applyMiddleware(Async)(createStore)

ReactDOM.render(
  <Provider store={ createStoreWithMiddleWare(reducers) } >
    <App />
  </Provider>,
  document.querySelector('.container')
)
