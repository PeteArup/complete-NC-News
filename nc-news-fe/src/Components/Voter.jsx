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
      <section>
        <p>Votes: {votes + optimisiticVote}</p>
        <button
          onClick={() => this.updateVote(1)}
          disabled={optimisiticVote === 1}>
          UP
        </button>

        <button
          onClick={() => this.updateVote(-1)}
          disabled={optimisiticVote === -1}>
          DOWN
        </button>
      </section>
    )
  }
}

export default voter
