import { GmailAuthorizeButton } from './buttons/GmailAuthorizeButton'
import { GmailSignOutButton } from './buttons/GmailSignOutButton'
import { GmailForm } from './forms/GmailForm'
import { MailHelperInfo } from './project-info/MailHelperInfo' 

import { clientId, apiKey, scopes, discovery_docs } from '../config/config'

import { listLabels } from '../gmail/labels'
// import { listFilters } from '../gmail/filters'
import { Label } from '../models/Label'

import store from '../redux/store'
import { addLabels } from '../redux/actions'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: flex;
			flex-direction: column;

			padding: 2em;
		}

		h1 {
			font-size: 2.8em;
			text-align: center;
		}


	</style>

	<h1>Mail helper</h1>

	<slot></slot>
`

export class GmailHelper extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.authorizeButton = new GmailAuthorizeButton()
    this.authorizeButton.style.display = 'none'
    this.appendChild(this.authorizeButton) 

    this.projectInfo = new MailHelperInfo()
    this.projectInfo.style.display = 'none'
    this.appendChild(this.projectInfo)

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
        console.error(error)
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
  async updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      this.authorizeButton.style.display = 'none'
      this.projectInfo.style.display = 'none'
      this.signOutButton.style.display = 'flex'
      await this.loadReduxData()
      this.addForm()
    } else {
      this.authorizeButton.style.display = 'flex'
      this.projectInfo.style.display = 'block'
      this.signOutButton.style.display = 'none'
      this.removeForm()
    }
  }

  async loadReduxData() {
    // Labels
    const rawLabels = await listLabels()
    const labels = Label.convertRawLabelDataToModelData(rawLabels)
    store.dispatch(addLabels(labels))
		
    // Filters
    // const filters = await listFilters()
    // console.log(filters)
  }

  addForm() {
    const form = new GmailForm()
    this.appendChild(form)
  }

  removeForm() {
    const elements = this.getElementsByTagName('gmail-form')
		
    if (elements.length > 0) {
      this.removeChild(elements[0])
    }
  }
}

customElements.define('gmail-helper', GmailHelper)
