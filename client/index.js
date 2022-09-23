import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('App')
)
