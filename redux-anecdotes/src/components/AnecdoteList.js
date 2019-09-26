import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { makeNotification, cleanNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes

  const vote = (id) => {
    props.store.dispatch(voteAnecdote(id))

    const anecdote = anecdotes.find(a => a.id === id)
    const text = `you voted for "${anecdote.content}"`
    props.store.dispatch(makeNotification(text))

    setTimeout(() => {
      props.store.dispatch(cleanNotification())
    }, 3000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)} > vote </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
