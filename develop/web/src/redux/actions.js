/*** AUTH ***/

export const HAS_AUTHENTICATION = 'USER_HAS_AUTHENTICATION'

function hasAuthentication(value) {
	return { type: HAS_AUTHENTICATION, value }
}

/*** Labels ***/
export const SET_LABEL_LIST_VISIBILITY = 'SET_LABEL_LIST_VISIBILITY'
export const LABEL_LIST_VISIBILITY_OPTIONS = {
	LABEL_HIDE: 'labelHide',
	LABEL_SHOW: 'labelShow',
	LABEL_SHOW_IF_UNREAD: 'labelShowIfUnread'
}