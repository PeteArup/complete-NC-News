import React, { Component } from 'react'
import * as api from '../utils/api'
import { Link } from '@reach/router'

class Nav extends Component {
  state = { topics: [] }

  componentDidMount() {
    this.getTopics().then((topics) => {
      this.setState({ topics })
    })
  }

  getTopics = () => {
    return api.getTopics()
  }

  render() {
    console.log(this.state)

    const { topics } = this.state
    return (
      <nav>
        {topics.map((topic) => {
          console.log(topic)
          return (
            <Link to={`/topic/${topic.slug}`} key={topic.slug}>
              <button>{topic.slug}</button>
            </Link>
          )
        })}
      </nav>
    )
  }
}

export default Nav
