import { GmailAuthorizeButton } from './GmailAuthorizeButton'

export class GmailHelper extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		let authorizeButton = new GmailAuthorizeButton()
		this.appendChild(authorizeButton)
	}
}

customElements.define('gmail-helper', GmailHelper)