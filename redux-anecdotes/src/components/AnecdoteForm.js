import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { makeNotification, cleanNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const handleSubmit = e => {
    e.preventDefault()
    let input = e.target.new
    const newContent = input.value

    anecdoteService.createNew(newContent).then(a => {
      console.log(a)
      input.value = ''

      props.createAnecdote(a)
      props.makeNotification(`you added: "${a.content}"`)

      setTimeout(() => {
        props.cleanNotification()
      }, 3000)
    })


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
