export class GmailSignOutButton extends HTMLButtonElement {
	constructor() {
		super()

		this.addEventListener('click', this.handleSignOut)
	}

	connectedCallback() {
		this.textContent = 'Sign out'
	}

	/**
   *  Sign out the user upon button click.
   */
	handleSignOut() {
		gapi.auth2.getAuthInstance().signOut()
	}
}

customElements.define('gmail-sign-out-button', GmailSignOutButton, { extends: 'button' })