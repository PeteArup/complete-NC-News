import React from 'react'
import { Title } from './Components/Title'
import { AllArticles } from './Components/AllArticles'
import { Router } from '@reach/router'
import './App.css'
import SingleArticle from './Components/SingleArticle'
import './layout.css'

function App() {
  return (
    <div className="App">
      <Title />
      <Router className="page">
        <AllArticles path="/" />
        <AllArticles path="/topic/:topic" />
        <SingleArticle path="/article/:article_id" />
      </Router>
    </div>
  )
}

export default App
