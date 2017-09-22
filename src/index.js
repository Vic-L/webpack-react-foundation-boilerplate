import '_stylesheets/main.sass'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '_components/App'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Lato']
  }
})

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("app"))