import { GmailAuthorizeButton } from './buttons/GmailAuthorizeButton'
import { GmailSignOutButton } from './buttons/GmailSignOutButton'
import { GmailForm } from './forms/GmailForm'
import store from '../redux/store'
import { clientId, apiKey, scopes, discovery_docs } from '../config/config'

export class GmailHelper extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.authorizeButton = new GmailAuthorizeButton()
		this.authorizeButton.style.display = 'none'
		this.appendChild(this.authorizeButton) 

		this.signOutButton = new GmailSignOutButton()
		this.signOutButton.style.display = 'none'
		this.appendChild(this.signOutButton)

		gapi.load('client:auth2', () => this.initClient())
	}

	/**
	 *  Initializes the API client library and sets up sign-in state
	 *  listeners.
	 */
	initClient() {
		gapi.client.init({
			apiKey: apiKey,
			clientId: clientId,
			discoveryDocs: discovery_docs,
			scope: scopes
		})
		.then(() => this.setAuthListeners())
		.catch(error => {
			console.log(error)
		})
	}

	/**
	 * Initializes sets up sign-in state listeners.
	 */
	setAuthListeners() {
		// Listen for sign-in state changes.
		gapi.auth2.getAuthInstance().isSignedIn
			.listen(isSignedIn => this.updateSigninStatus(isSignedIn))

		// Handle the initial sign-in state.
		this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
	}

	/**
	 *  Called when the signed in status changes, to update the UI
	 *  appropriately. After a sign-in, the API is called.
	 */
	updateSigninStatus(isSignedIn) {
		if (isSignedIn) {
			this.authorizeButton.style.display = 'none'
			this.signOutButton.style.display = 'block'
			this.addForm()
		} else {
			this.authorizeButton.style.display = 'block'
			this.signOutButton.style.display = 'none'
			this.removeForm()
		}
	}

	addForm() {
		const form = new GmailForm()
		this.appendChild(form)
	}

	removeForm() {
		
	}
}

customElements.define('gmail-helper', GmailHelper)