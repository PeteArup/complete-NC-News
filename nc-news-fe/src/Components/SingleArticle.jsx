import React, { Component } from 'react'
import * as api from '../utils/api'
import Loader from './Loader'
import Voter from './Voter'
import AddComment from './AddComment'
import LoginToView from './LoginToView'
import ErrorPage from './ErrorPage'

class SingleArticle extends Component {
  state = { comments: {}, article: {}, isLoading: true, newComment: '' }

  componentDidMount() {
    api
      .getSingleArticle(this.props.article_id)
      .then((article) => {
        api.getComments(article.article_id).then((comments) => {
          this.setState({ comments, article, isLoading: false })
        })
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          err: { msg: err.response.data.msg, status: err.response.status }
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
    const { isLoading, comments, err } = this.state
    if (isLoading) return <Loader />
    if (err) return <ErrorPage {...err} />
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
        <LoginToView name="vote" user={this.props.user}>
          <Voter id={article_id} votes={votes} type="articles" />
        </LoginToView>
        <p>{body}</p>
        <p>Comments: {comment_count}</p>
        <LoginToView name="add new comment" user={this.props.user}>
          <AddComment id={article_id} getNewComment={this.getNewComment} />
        </LoginToView>

        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h5>Author: {comment.author}</h5>
                <p>{comment.body}</p>
                <LoginToView name="vote" user={this.props.user}>
                  <Voter
                    id={comment.comment_id}
                    type="comments"
                    votes={comment.votes}
                  />
                </LoginToView>
                <LoginToView name="delete" user={this.props.user}>
                  <button
                    onClick={() => {
                      this.deleteComment(comment.comment_id)
                    }}>
                    Delete comment
                  </button>
                </LoginToView>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  deleteComment = (id) => {
    api.deleteComment(id)
  }
}

export default SingleArticle
