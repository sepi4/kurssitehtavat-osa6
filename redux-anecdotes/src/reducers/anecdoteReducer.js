export const voteAnecdote = (id) => {
  return {
    type: 'VOTE', 
    data: id,
  }
}
export const createAnecdote = (newContent) => {
  return {
    type: 'NEW', 
    data: newContent,
  }
}
export const initializeAnecdotes = (arr) => {
  return {
    type: 'INIT',
    data: arr,
  }
}




const sortByVotes = (a, b) => -(a.votes - b.votes)

const reducer = (state = [], action) => {
  // console.log('state now: ', state)
  switch(action.type) {
    case "INIT":
      return action.data

    case "VOTE":
      const id = action.data
      return state.map(x => {
        if (x.id === id) {
          return {
            ...x,
            votes: x.votes + 1,
          }
        }
        else {
          return x
        }
      }).slice().sort(sortByVotes)

    case "NEW":
      const newAnecdote = action.data
      return [...state, newAnecdote].slice().sort(sortByVotes)

    default:
      return state
  }
}

export default reducer
