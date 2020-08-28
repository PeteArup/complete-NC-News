import React, { Component } from 'react'
import * as api from '../utils/api'
import { ArticleList } from './ArticleList'

class AllArticles extends Component {
  state = { articles: [] }

  componentDidMount() {
    this.getArticles().then((articles) => {
      this.setState({ articles })
    })
  }

  getArticles = () => {
    return api.getArticles()
  }

  render() {
    const { articles } = this.state
    console.log(articles)
    return <ArticleList articles={articles} />
  }
}

export { AllArticles }
