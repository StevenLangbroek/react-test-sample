import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import user from './modules/user'
import poll from './modules/poll'

export default combineReducers({
  router,
  user,
  poll
})
