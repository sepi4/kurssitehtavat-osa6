export const changeFilter = (text) => {
  return {
    type: 'FILTER',
    data: text,
  }
}


const reducer = (state = '', action) => {
  // console.log('state:', state)
  switch(action.type) {
    case 'FILTER':
      return action.data

    default:
      return state
  }
}

export default reducer
