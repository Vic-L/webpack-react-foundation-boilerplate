import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from "react-router-dom"

import Header from '_components/Header'
import Article from '_components/Article'
import Articles from '_components/Articles'

import TransitionGroup from 'react-transition-group/TransitionGroup'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Lato', 'Noto Serif']
  }
})

const App = () => {
  return <TransitionGroup>
    <Helmet>
      <meta charSet="utf-8" />
      <title>One Piece rox!</title>
      <meta name="description" content="One Piece rox!" />
    </Helmet>

    <Header/>

    <Switch>
      <Route
        exact
        path="/articles/:articleId"
        component={Article} />
      <Route
        path="/articles"
        component={Articles} />
    </Switch>

  </TransitionGroup>
}

export default App
