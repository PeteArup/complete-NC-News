import React, { Component } from 'react'
import * as api from '../utils/api'

class voter extends Component {
  state = { optimisiticVote: 0 }

  updateVote = (votes) => {
    api.patchVotes(this.props.id, this.props.type, votes)
    this.setState((currentState) => {
      return { optimisiticVote: currentState.optimisiticVote + votes }
    })
  }

  render() {
    const { votes } = this.props
    const { optimisiticVote } = this.state
    return (
      <section className="voting">
        <p>Votes: {votes + optimisiticVote}</p>
        <button
          className="customBtnUp"
          onClick={() => this.updateVote(1)}
          disabled={optimisiticVote === 1}></button>
        <button
          className="customBtnDown"
          onClick={() => this.updateVote(-1)}
          disabled={optimisiticVote === -1}></button>
      </section>
    )
  }
}

export default voter
