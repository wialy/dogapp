import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import App from './containers/App/'

import configureStore from './configureStore'

import fontLoader from 'webfontloader'

import './styles'

const store = configureStore()

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

fontLoader.load({
  google: {
    families: ['Rubik']
  },
  active: render,
  inactive: render
})
