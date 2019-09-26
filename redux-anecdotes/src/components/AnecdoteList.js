import React from 'react';
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { makeNotification, cleanNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = (id) => {
    props.voteAnecdote(id)

    const anecdote = anecdotes.find(a => a.id === id)
    const text = `you voted for "${anecdote.content}"`

    props.makeNotification(text)

    setTimeout(() => {
      props.cleanNotification()
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

const filteredSortedAnecdotes =({ filter, anecdotes }) => {
  return anecdotes.filter(a => a.content
    .toLowerCase()
    .includes(filter)
  )
} 

const mapStateToProps = state => {
  return {
    anecdotes: filteredSortedAnecdotes(state),
    // filter: state.filter,
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  makeNotification,
  cleanNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
