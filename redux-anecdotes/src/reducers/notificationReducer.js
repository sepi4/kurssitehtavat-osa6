export const makeNotification = (text) => {
  return {
    type: 'MAKE_NOTIFICATION',
    data: text,
  }
}

export const cleanNotification = () => {
  return {
    type: 'CLEAN_NOTIFICATION',
  }
}

const reducer = (state = null, action) => {
  console.log('state:', state)
  switch(action.type) {
    case 'MAKE_NOTIFICATION':
      return action.data

    case 'CLEAN_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default reducer
