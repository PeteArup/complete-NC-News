import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'
import Voter from './Voter'
import AddComment from './AddComment'

class SingleArticle extends Component {
  state = { comments: {}, article: {}, isLoading: true, newComment: '' }

  componentDidMount() {
    api.getSingleArticle(this.props.article_id).then((article) => {
      api.getComments(article.article_id).then((comments) => {
        console.log(comments)
        this.setState({ comments, article, isLoading: false })
      })
    })
  }

  getNewComment = (newComment) => {
    const { author, body, comment_id, created_at, votes } = newComment
    return this.setState({
      comments: [
        ...this.state.comments,
        { author, body, comment_id, created_at, votes }
      ]
    })
  }

  render() {
    const { isLoading, comments } = this.state
    if (isLoading) return <Loader />
    const {
      author,
      article_id,
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
        <Voter id={article_id} votes={votes} type="articles" />
        <p>{body}</p>
        <p>Comments: {comment_count}</p>
        <AddComment id={article_id} getNewComment={this.getNewComment} />

        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h5>Author: {comment.author}</h5>
                <p>{comment.body}</p>
                <Voter
                  id={comment.comment_id}
                  type="comments"
                  votes={comment.votes}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SingleArticle
