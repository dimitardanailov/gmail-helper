export class GmailAuthorizeButton extends HTMLButtonElement {
	constructor() {
		super()

		this.addEventListener('click', this.handleAuth)
	}

	connectedCallback() {
		this.textContent = 'Authorize'
	}

	/**
   *  Sign in the user upon button click.
   */
	handleAuth() {
		gapi.auth2.getAuthInstance().signIn()
	}
}

customElements.define('gmail-authorize-button', GmailAuthorizeButton, { extends: 'button' })