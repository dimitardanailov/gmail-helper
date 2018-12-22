import { combineReducers } from 'redux'
import { 
	HAS_AUTHENTICATION,
	LABEL_ACTIONS
} from './actions'

function userIsAuth(state = false, action) {
	switch(action.type) {
		case HAS_AUTHENTICATION:
			return action.value
		default:
			return state
	}
}

function labels(state = [], action) {
	switch(action.type) {
		case LABEL_ACTIONS.LIST_LABELS:
			return action.labels
		case LABEL_ACTIONS.ADD_LABEL:
			return state
		default:
			return state
	}
}

const app = combineReducers({
	userIsAuth,
	labels
})

export default app