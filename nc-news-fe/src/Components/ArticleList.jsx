import React, { Component } from 'react'
import StyledListItem from './StyledListItem'
import { Link } from '@reach/router'
import Voter from './Voter'
import LoginToView from './LoginToView'

class ArticleList extends Component {
  state = { sort_by: '' }

  render() {
    console.log(this.state)
    const { articles } = this.props

    return (
      <div>
        <h3>{articles.length} articles found</h3>
        <section>
          Sort by:
          <button onClick={this.handleClick} id="comment_count">
            Comments
          </button>
          <button onClick={this.handleClick} id="created_at">
            Dates
          </button>
          <button onClick={this.handleClick} id="votes">
            Votes
          </button>
        </section>
        <ul>
          {articles.map((article) => {
            return (
              <StyledListItem key={article.article_id}>
                <Link to={`/article/${article.article_id}`}>
                  <h4>{article.title}</h4>
                </Link>
                <p>Date Created: {article.created_at.substring(0, 10)}</p>
                <p>Number of Comments: {article.comment_count}</p>
                <LoginToView name="vote" user={this.props.user}>
                  {' '}
                  <Voter
                    id={article.article_id}
                    type="articles"
                    votes={article.votes}
                  />
                </LoginToView>
              </StyledListItem>
            )
          })}
        </ul>
      </div>
    )
  }

  handleClick = (event) => {
    this.props.getSortBy(event.target.id)
  }
}

export default ArticleList
