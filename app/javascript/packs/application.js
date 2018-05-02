import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router'

import App from '../react/App'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <App />,
      reactElement
    )
  }
})
