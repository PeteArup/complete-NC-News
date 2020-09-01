import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'

class SingleArticle extends Component {
  state = { article: {}, isLoading: true }

  componentDidMount() {
    api.getSingleArticle(this.props.article_id).then((article) => {
      console.log(article)
      this.setState({ article, isLoading: false })
    })
  }

  render() {
    const { isLoading } = this.state
    if (isLoading) return <Loader />
    const {
      author,
      body,
      comment_count,
      title,
      topic,
      votes
    } = this.state.article
    return (
      <div>
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Topic: {topic} </p>
        <p>Votes: {votes} </p>
        <p>Comments: {comment_count}</p>
        <p>{body}</p>
      </div>
    )
  }
}

export default SingleArticle
