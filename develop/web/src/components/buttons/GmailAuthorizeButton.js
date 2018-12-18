export class GmailAuthorizeButton extends HTMLButtonElement {
	constructor() {
		super()

		this.addEventListener('click', this.handleAuth)
	}

	connectedCallback() {
		this.textContent = 'Authorize'
	}

	handleAuth() {
		console.log('handleAuth')
	}
}

customElements.define('gmail-authorize-button', GmailAuthorizeButton, { extends: 'button' })