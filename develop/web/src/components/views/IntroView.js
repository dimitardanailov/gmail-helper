import { AbstractView } from './AbstractView'

// import { MailHelperInfo } from './project-info/MailHelperInfo'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}
	</style>

  <h2>Intro view ...</h2>
`

export class IntroView extends AbstractView {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    
  }
}

customElements.define('gh-intro-view', IntroView)
