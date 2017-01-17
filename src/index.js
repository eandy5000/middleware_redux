import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import App from './containers/app'
import reducers from './reducers'

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={ createStoreWithMiddleWare(reducers) } >
    <App />
  </Provider>,
  document.querySelector('.container')
)
