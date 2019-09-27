import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const getId = () => (100000 * Math.random()).toFixed(0)

  const object = { 
    content, 
    id: getId(),
    votes: 0,
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async id => {
  const au = await axios.get(`${baseUrl}/${id}`)
  const a = await axios.put(`${baseUrl}/${id}`, {...au.data, votes: au.data.votes + 1})
  return a.data
}

export default { getAll, createNew, vote }
