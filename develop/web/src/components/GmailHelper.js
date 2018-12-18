import { GmailAuthorizeButton } from './buttons/GmailAuthorizeButton'
import { GmailSignOutButton } from './buttons/GmailSignOutButton'
import store from '../redux/store'
import { initClient } from '../gmail/auth'

export class GmailHelper extends HTMLElement {
	constructor() {
		super()
		console.log(store.getState())
	}

	connectedCallback() {
		let authorizeButton = new GmailAuthorizeButton()
		this.appendChild(authorizeButton) 

		let signOutButton = new GmailSignOutButton()
		this.appendChild(signOutButton)
	}
}

customElements.define('gmail-helper', GmailHelper)