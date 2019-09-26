import React from 'react';

const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = (id) => {
    props.store.dispatch(
      {
        type: 'VOTE', 
        data: id
      }
    )
    console.log(props.store.getState())
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newContent = e.target.new.value
    e.target.new.value = ''
    props.store.dispatch({
      type: 'NEW',
      data: newContent,
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
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

export default App
