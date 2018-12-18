export const HAS_AUTHENTICATION = 'USER_HAS_AUTHENTICATION'

function hasAuthentication(value) {
	return { type: HAS_AUTHENTICATION, value }
}