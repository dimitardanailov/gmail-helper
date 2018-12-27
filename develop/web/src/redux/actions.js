/*** AUTH ***/
export const HAS_AUTHENTICATION = 'USER_HAS_AUTHENTICATION'

function hasAuthentication(value) {
	return { type: HAS_AUTHENTICATION, value }
}

/*** Labels ***/
export const LABEL_ACTIONS = {
	LIST_LABELS: 'LIST_LABELS',
	ADD_LABEL: 'ADD_LABEL',
	SET_BACKGROUND_COLOR: 'SET_BACKGROUND_COLOR',
	SET_COLOR: 'SET_COLOR'
}
export let GMAIL_LABELS = []

export function addLabels(labels) {
	GMAIL_LABELS = labels

	return {
		type: LABEL_ACTIONS.LIST_LABELS,
		labels
	}
}

export function addLabel(label) {
	GMAIL_LABELS.push(label)

  return {
    type: LABEL_ACTIONS.ADD_LABEL,
    label
  }
}

export function setLabelBackgroundColor(bgColor) {
	return {
		type: LABEL_ACTIONS.SET_BACKGROUND_COLOR,
		bgColor
	}
}

export function setLabelColor(color) {
	return {
		type: LABEL_ACTIONS.SET_COLOR,
		color
	}
}