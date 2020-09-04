import React from 'react'
import * as api from '../utils/api'

class AddComment extends React.Component {
  state = {
    comment: null,
    username: 'grumpy19',
    submitted: false
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="commentForm">
        <p>Add comment:</p>
        <label htmlFor="comment">
          <textarea
            type="text"
            id="comment"
            rows="4"
            placeholder="type new comment here"
            onChange={this.handleChange}
          />
        </label>
        <br />
        {this.state.comment !== null && (
          <button type="submit">Add comment</button>
        )}
        {this.state.submitted && (
          <section>
            <h3>
              "{this.state.newComment.body}" has successfully been added to the
              comments
            </h3>
          </section>
        )}
      </form>
    )
  }
  handleChange = (changeEvent) => {
    const { id, value } = changeEvent.target
    this.setState(() => {
      return { [id]: value }
    })
  }

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault()
    api
      .postComment(this.props.id, {
        username: this.state.username,
        body: this.state.comment
      })
      .then((newComment) => {
        this.props.getNewComment(newComment)
        this.setState(() => {
          return { submitted: true, newComment: newComment }
        })
      })
    document.getElementById('commentForm').reset()
  }
}

export default AddComment
