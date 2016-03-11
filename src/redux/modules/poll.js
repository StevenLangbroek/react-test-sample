import createReducer from '../createReducer'

export const FETCH_POLL = 'FETCH_POLL'
export const FETCH_POLL_SUCCESS = 'FETCH_POLL_SUCCESS'
export const FETCH_POLL_FAIL = 'FETCH_POLL_FAIL'

export const ANSWER_POLL = 'ANSWER_POLL'
export const ANSWER_POLL_SUCCESS = 'ANSWER_POLL_SUCCESS'
export const ANSWER_POLL_FAIL = 'ANSWER_POLL_FAIL'

const initialState = {
  $isFetching: false,
  $didFailFetching: false,
  $didFetch: false,
  entities: {}
}

export default createReducer(initialState, {
  [FETCH_POLL]: (state) => ({
    ...state,
    $isFetching: true
  }),
  [FETCH_POLL_SUCCESS]: (state, { payload }) => ({
    ...state,
    $isFetching: false,
    $didFetch: true,
    entities: Object.assign(
      {},
      state.entities,
      {
        [payload.id]: payload
      }
    )
  }),
  [FETCH_POLL_FAIL]: (state) => ({
    ...state,
    $isFetching: false,
    $didFetch: true,
    $didFailFetching: true
  }),
  [ANSWER_POLL]: (state, { poll: { id }}) => ({
    ...state,
    entities: {
      ...state.entities,
      [id]: {
        ...state.entities[id],
        $isAnswering: true
      }
    }
  }),
  [ANSWER_POLL_SUCCESS]: (state, { poll, answer }) => ({
    ...state,
    entities: {
      ...state.entities,
      [poll.id]: {
        ...state.entities[poll.id],
        answered_question: answer.id,
        $isAnswering: false
      }
    }
  })
})

export const castVote = (poll, answer) => (dispatch, getState) => {
  const { user } = getState()

  if (!user.user) {
    return dispatch({
      type: ANSWER_POLL_SUCCESS,
      poll,
      answer
    })
  }

  dispatch({
    type: ANSWER_POLL,
    poll,
    answer
  })

  return fetch(
    `https://login.moviepilot.com/v2/users/${user.user.id}/actions/answers/${answer.id}`,
    { method: 'post', credentials: 'include' }
  ).then(res => res.json())
  .then(() => dispatch({
    type: ANSWER_POLL_SUCCESS,
    poll,
    answer
  }))
}

export const fetchPoll = (pollId) => (dispatch, getState) => {
  const { user } = getState()

  dispatch({
      type: FETCH_POLL
    })

  const url = (user && user.user)
    ? `https://login.moviepilot.com/v2/users/${user.user.id}/questionnaires/${pollId}`
    : `https://login.moviepilot.com/v2/polls/${pollId}`

  return fetch(url, { credentials: 'include' })
    .then(res => res.json())
    .then(payload => dispatch({
      type: FETCH_POLL_SUCCESS,
      payload
    }))
}
