export class GmailSignOutButton extends HTMLButtonElement {
	constructor() {
		super()

		this.addEventListener('click', this.handleSignOut)
	}

	connectedCallback() {
		this.textContent = 'Sign out'
	}

	handleSignOut() {
		console.log('sign out')
	}
}

customElements.define('gmail-sign-out-button', GmailSignOutButton, { extends: 'button' })