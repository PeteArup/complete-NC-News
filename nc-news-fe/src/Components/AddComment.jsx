import React from 'react'
import * as api from '../utils/api'

class AddComment extends React.Component {
  state = {
    comment: '',
    username: 'grumpy19',
    submitted: false
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">
          Name:
          <input type="text" id="comment" onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Add comment</button>
        {this.state.submitted && (
          <section>
            <h3>comment successfully added</h3>
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
  }
}

export default AddComment
