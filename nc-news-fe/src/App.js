import React, { Component } from 'react'
import { Title } from './Components/Title'
import { AllArticles } from './Components/AllArticles'
import { Router } from '@reach/router'
import './App.css'
import SingleArticle from './Components/SingleArticle'
import './layout.css'
import ErrorPage from './Components/ErrorPage'

class App extends Component {
  state = { user: 'grumpy19' }
  render() {
    const { user } = this.state
    return (
      <div className="App">
        <Title />
        <section className="login">
          {' '}
          <p>user: {user}</p>
          <button
            onClick={() => {
              this.setState({ user: null })
            }}>
            logout
          </button>
          <button
            onClick={() => {
              this.setState({ user: 'grumpy19' })
            }}>
            login
          </button>
        </section>
        <Router className="page">
          <AllArticles path="/" user={user} />
          <AllArticles path="/topic/:topic" user={user} />
          <SingleArticle path="/article/:article_id" user={user} />
          <ErrorPage default status={404} msg={'Path not found!'} />
        </Router>
      </div>
    )
  }
}

export default App
