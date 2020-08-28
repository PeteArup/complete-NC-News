import axios from 'axios'

const axiosInst = axios.create({
  baseURL: 'https://petes-nc-news-app.herokuapp.com/api'
})

export const getTopics = () => {
  return axiosInst.get('/topics').then((topics) => {
    return topics.data.topics
  })
}

export const getArticles = () => {
  return axiosInst.get('/articles').then((articles) => {
    return articles.data.articles
  })
}
