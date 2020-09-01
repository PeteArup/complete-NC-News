import { filterTopics } from './utils'

describe('filterTopics', () => {
  test('returns just the topics of a given value', () => {
    const inputArr = [
      {
        author: 'happyamy2016',
        title: 'High Altitude Cooking',
        article_id: 28,
        topic: 'cooking'
      },
      {
        author: 'jessjelly',
        title:
          'Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams',
        article_id: 30,
        topic: 'cooking'
      },
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football'
      }
    ]
    const expectedOutput = [
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football'
      }
    ]
    expect(filterTopics(inputArr, 'football')).toEqual(expectedOutput)
  })
})
