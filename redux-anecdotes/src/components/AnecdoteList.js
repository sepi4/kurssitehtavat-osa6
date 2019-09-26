import React from 'react';
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { makeNotification, cleanNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  // let anecdotes = props.store.getState().anecdotes
  let anecdotes = props.anecdotes
  anecdotes = anecdotes.filter(a => a.content
    .toLowerCase()
    .includes(props.filter)
  )

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

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
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
