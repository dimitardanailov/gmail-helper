import { AbstractView } from './AbstractView'

import '../project-info/MailHelperInfo'
import '../buttons/GmailAuthorizeButton'
import '../headers/Slogan'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}
  </style>
  
  <gh-slogan></gh-slogan>
  <gh-authorize-button></gh-authorize-button>
  <gh-mail-helper-info></gh-mail-helper-info>
`

export class IntroView extends AbstractView {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('gh-intro-view', IntroView)
