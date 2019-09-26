import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { makeNotification, cleanNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const handleSubmit = e => {
    e.preventDefault()
    const newContent = e.target.new.value
    e.target.new.value = ''
    // props.store.dispatch(createAnecdote(newContent))
    props.createAnecdote(newContent)


    props.makeNotification(`you added: "${newContent}"`)

    setTimeout(() => {
      props.cleanNotification()
    }, 3000)
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
  createAnecdote,
  makeNotification,
  cleanNotification,
}

export default connect(
  null, 
  mapDispatchToProps
)(AnecdoteForm)
