import { combineReducers } from 'redux'
import { HAS_AUTHENTICATION } from './actions'

function userIsAuth(state = false, action) {
	switch(action.type) {
		case HAS_AUTHENTICATION:
			return action.value
		default:
			return state
	}
}

const app = combineReducers({
	userIsAuth
})

export default app