import anecdoteService from '../services/anecdotes'

export const voteAnecdote = id => {
  return dispatch => {
    anecdoteService.vote(id)
      .then(updatedAnecdote => {
        dispatch({
          type: 'VOTE', 
          data: {
            id: updatedAnecdote.id,
            votes: updatedAnecdote.votes
          },
        })
      })
  }
}

export const createAnecdote = content => {
  return dispatch => {
    anecdoteService.createNew(content)
      .then(newAnecdote => {
        dispatch({
          type: 'NEW', 
          data: newAnecdote,
        })
      })
  }
}

export const initializeAnecdotes = arr => {
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
      const id = action.data.id
      const votes = action.data.votes
      return state.map(x => {
        if (x.id === id) {
          return {
            ...x,
            votes: votes,
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
