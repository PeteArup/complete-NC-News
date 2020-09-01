const filterTopics = (articleArr, topic) => {
  const filteredArr = articleArr.filter((article) => {
    return article.topic === topic
  })
  return filteredArr
}

export { filterTopics }
