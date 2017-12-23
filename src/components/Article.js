import _ from 'lodash'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import FadeTransition from '_components/FadeTransition'

class Article extends Component {
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
    const { match: { path, params } } = this.props

    return (
      <FadeTransition
        timeout={350}
        classNames="fade"
        shouldShow={this.state.in}>

        <div className="grid-container">
          <div className="article grid-x grid-padding-x">
            <div className="cell auto">
          
              <Helmet titleTemplate="%s - One piece rox!">
                <title>This is a single article page</title>
                <meta name="description" content="This is a single article page" />
              </Helmet>

              <div className="grid-x grid-padding-x">
                <div className="cell">
                  <h1>This is a single article page</h1>
                </div>
              </div>

            </div>
          </div>
        </div>

      </FadeTransition>
    )
  }
}

export default Article
