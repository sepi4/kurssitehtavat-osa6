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

export const setNotification = (text, sec) => {
  return dispatch => {
    dispatch(makeNotification(text))
    setTimeout(() => {
      dispatch(cleanNotification())
    }, sec * 1000)
  }
}

const reducer = (state = null, action) => {
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
