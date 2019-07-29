import { AbstractView } from './AbstractView'

import { GmailSignOutButton } from '../buttons/GmailSignOutButton'

import '../headers/MainHeader'
import '../forms/GmailForm'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}
	</style>

  <gh-main-header></gh-main-header>

  <gmail-sign-out-button></gmail-sign-out-button>

  <gh-form></gh-form>
`

export class HomeView extends AbstractView {
  
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    
  }
}

customElements.define('gh-home-view', HomeView)
