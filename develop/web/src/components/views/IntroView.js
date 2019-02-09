import { AbstractView } from './AbstractView'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}
	</style>

	Intro view ...
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

customElements.define('mh-intro-view', IntroView)
