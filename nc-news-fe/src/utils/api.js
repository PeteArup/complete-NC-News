import axios from 'axios'

const axiosInst = axios.create({
  baseURL: 'https://petes-nc-news-app.herokuapp.com/api'
})

export const getTopics = () => {
  return axiosInst.get('/topics').then((topics) => {
    return topics.data.topics
  })
}

export const getArticles = (topic) => {
  return axiosInst.get('/articles', { params: { topic } }).then((articles) => {
    return articles.data.articles
  })
}

export const getSingleArticle = (article_id) => {
  return axiosInst.get(`/articles/${article_id}`).then((article) => {
    return article.data.article
  })
}
