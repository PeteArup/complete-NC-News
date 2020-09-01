import React, { Component } from 'react'
import * as api from '../utils/api'
import { ArticleList } from './ArticleList'
import Loader from './Loader'

class AllArticles extends Component {
  state = { articles: [], isLoading: true }

  componentDidMount() {
    this.getArticles(this.props.topic).then((articles) => {
      this.setState({ articles, isLoading: false })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles(this.props.topic).then((articles) => {
        this.setState({ articles, isLoading: false })
      })
    }
  }

  getArticles = () => {
    return api.getArticles(this.props.topic)
  }

  render() {
    const { articles, isLoading } = this.state
    console.log(articles)
    if (isLoading) {
      return <Loader />
    }
    return <ArticleList articles={articles} />
  }
}

export { AllArticles }
