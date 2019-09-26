import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const handleSubmit = e => {
    e.preventDefault()
    const newContent = e.target.new.value
    e.target.new.value = ''
    // props.store.dispatch(createAnecdote(newContent))
    props.createAnecdote(newContent)
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            name='new'
          />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote
}

export default connect(
  null, 
  mapDispatchToProps
)(AnecdoteForm)
