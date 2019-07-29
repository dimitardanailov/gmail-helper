const template = document.createElement('template')

import Auth from '../auth'

import MailHelperRouter from './router/MailHelperRouter'

import './views/HomeView'
import './views/IntroView'

template.innerHTML = `
	<style>
		:host {
			position: relative;
      display: flex;
			flex-direction: column;
		}
	</style>

  <slot></slot>
`

export class GmailHelper extends HTMLElement {

  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    gapi.load('client:auth2', () => new Auth(this))
  }

  connectedCallback() {
    // MailHelperRouter.init(this)
  }
}

customElements.define('gmail-helper', GmailHelper)
