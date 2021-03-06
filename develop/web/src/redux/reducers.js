import { combineReducers } from 'redux'
import { 
  LABEL_ACTIONS
} from './actions'

export function labels(state = [], action) {
  switch(action.type) {
    case LABEL_ACTIONS.LIST_LABELS:
      return action.labels
    case LABEL_ACTIONS.ADD_LABEL:
      return action.label
    default:
      return state
  }
}

export function labelBackgroundColor(state = null, action) {
  switch(action.type) {
    case LABEL_ACTIONS.SET_BACKGROUND_COLOR:
      return action.bgColor
    default:
      return state
  }
}

export function labelColor(state = null, action) {
  switch(action.type) {
    case LABEL_ACTIONS.SET_COLOR:
      return action.color
    default:
      return state
  }
}

const app = combineReducers({
  labels,
  labelBackgroundColor,
  labelColor
})

export default app
