import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import store from './store'
import { Provider } from 'react-redux'
import BoatForm from './containers/BoatForm'

ReactDOM.render(
  <Provider store={store}>
    <BoatForm/>
  </Provider>,
  document.getElementById('root')
)