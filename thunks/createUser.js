import { isLoading, hasErrored, loginUser } from '../actions'

export const createUser = (user) => {
  const url = 'https://tech-connect-be.herokuapp.com/api/v1/users'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const newUser = await response.json();
      const loggedInUser = {
        email: user.email,
        id: newUser.data.id,
        api_key: newUser.data.attributes.api_key,
      }
      dispatch(loginUser(loggedInUser))
      dispatch(hasErrored(''))
    } catch(err) {
      dispatch(hasErrored(err.message))
    }
  }
}

