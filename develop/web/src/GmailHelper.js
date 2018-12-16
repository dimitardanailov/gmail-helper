import { authenticationURL } from './gmail/auth'
console.log(authenticationURL)

class GmailHelper extends HTMLElement {
	constructor() {
		super()
	}
}

customElements.define('gmail-helper', GmailHelper)