import React from 'react'

const ArticleList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <li>Title: {article.title}</li>
              <li>Votes: {article.votes}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export { ArticleList }
