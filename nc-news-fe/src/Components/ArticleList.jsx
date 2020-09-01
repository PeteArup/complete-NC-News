import React from 'react'
import StyledListItem from './StyledListItem'
import { Link } from '@reach/router'

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h3>{articles.length} articles found</h3>
      <ul>
        {articles.map((article) => {
          return (
            <StyledListItem key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <h4>{article.title}</h4>
              </Link>
              <p>Votes: {article.votes}</p>
            </StyledListItem>
          )
        })}
      </ul>
    </div>
  )
}

export { ArticleList }
