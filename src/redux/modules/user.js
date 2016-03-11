import createReducer from '../createReducer'

export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL'

const initialState = {
  $isFetching: false,
  $didFailFetching: false,
  $didFetch: false
}

export default createReducer(initialState, {
  [FETCH_USER]: (state) => ({
    ...state,
    $isFetching: true
  }),
  [FETCH_USER_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload,
    $isFetching: false,
    $didFetch: true
  }),
  [FETCH_USER_FAIL]: (state) => ({
    ...state,
    $isFetching: false,
    $didFailFetching: true,
    $didFetch: true
  })
})

export const fetchUser = (): Function => (dispatch: Function, getState: Function): Promise => {
  dispatch({ type: FETCH_USER })
  return fetch('https://login.moviepilot.com/v4/session', { credentials: 'include' })
    .then(res => res.json())
    .then(payload => dispatch({
      type: FETCH_USER_SUCCESS,
      payload
    }))
    .catch(() => dispatch({
      type: FETCH_USER_FAIL
    }))
}
