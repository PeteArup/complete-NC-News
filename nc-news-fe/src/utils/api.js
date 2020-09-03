import axios from 'axios'

const axiosInst = axios.create({
  baseURL: 'https://petes-nc-news-app.herokuapp.com/api'
})

export const getTopics = () => {
  return axiosInst.get('/topics').then((topics) => {
    return topics.data.topics
  })
}

export const getArticles = (topic, sort_by = 'votes') => {
  return axiosInst
    .get('/articles', { params: { topic, sort_by } })
    .then((articles) => {
      return articles.data.articles
    })
}

export const getSingleArticle = (article_id) => {
  return axiosInst.get(`/articles/${article_id}`).then((article) => {
    return article.data.article
  })
}

export const getComments = (article_id, sort_by = 'created_at') => {
  return axiosInst
    .get(`/articles/${article_id}/comments`, { params: { sort_by } })
    .then((comments) => {
      return comments.data.comments
    })
}

export const patchVotes = (id, type, inc_votes) => {
  return axiosInst.patch(`/${type}/${id}`, { inc_votes }).then((data) => {
    console.log(data)
  })
}

export const postComment = (id, newComment) => {
  return axiosInst
    .post(`/articles/${id}/comments`, newComment)
    .then((newComment) => {
      return newComment.data.comment
    })
}
