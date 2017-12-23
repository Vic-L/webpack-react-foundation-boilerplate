import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Switch, Route, Link } from "react-router-dom"

import Article from "_components/Article"
import FadeTransition from '_components/FadeTransition'

class Articles extends Component {
  constructor(props) {
    super(props)

    this.state = { in: false }
  }

  componentWillUnmount() {
    this.setState({in: false})
  }

  componentDidMount() {
    if (!this.state.in) {
      this.setState({in: true})
    }
  }

  render() {
    const { match } = this.props
    return (
      <FadeTransition
        timeout={350}
        classNames="fade"
        shouldShow={this.state.in}>

        <div className="grid-container">
          { this.getArticles() }
        </div>

      </FadeTransition>
    )
  }

  getArticles = () => {
    const { match } = this.props

    return [
      "Luffy",
      "Zoro",
      "Nami",
      "Usopp",
      "Sanji",
      "Robin",
      "Chopper",
      "Franky",
      "Brooks",
    ].map((article) => {
      return (
        <div key={`${article}`} className="grid-x grid-padding-x">
          <div className="cell auto">
            <Link to={`${match.url}/${article}`}>
              {_.startCase(_.toLower(article))}
            </Link>
          </div>
        </div>
      )
    })
  }
}

export default Articles