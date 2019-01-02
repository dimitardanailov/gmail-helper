import generateTemplate from './generateTemplate'

const template = generateTemplate('Sign out')

export class GmailSignOutButton extends HTMLElement {
	constructor() {
		super()

		// Attach a shadow root to the element.
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))

		this.addEventListener('click', this.handleSignOut)
	}

	connectedCallback() {
		if (!this.hasAttribute('role')) 
			this.setAttribute('role', 'button')
	}

	/**
   *  Sign out the user upon button click.
   */
	handleSignOut() {
		gapi.auth2.getAuthInstance().signOut()
	}
}

customElements.define('gmail-sign-out-button', GmailSignOutButton)