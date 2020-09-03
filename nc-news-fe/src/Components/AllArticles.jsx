import React, { Component } from 'react'
import * as api from '../utils/api'
import ArticleList from './ArticleList'
import Loader from './Loader'

class AllArticles extends Component {
  state = { articles: [], isLoading: true, sort_by: 'comment_count' }

  componentDidMount() {
    this.getArticles(this.props.topic, this.state.sort_by).then((articles) => {
      this.setState({ articles, isLoading: false })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.getArticles(this.props.topic, this.state.sort_by).then(
        (articles) => {
          this.setState({ articles, isLoading: false })
        }
      )
    }
  }

  getArticles = () => {
    return api.getArticles(this.props.topic, this.state.sort_by)
  }

  getSortBy = (sort_by) => {
    return this.setState({ sort_by })
  }

  render() {
    console.log(this.state)
    const { articles, isLoading } = this.state
    if (isLoading) {
      return <Loader />
    }
    return <ArticleList articles={articles} getSortBy={this.getSortBy} />
  }
}

export { AllArticles }
