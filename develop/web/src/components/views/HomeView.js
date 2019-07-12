import { AbstractView } from './AbstractView'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}
	</style>

  Home Page ...
`

export class HomeView extends AbstractPage {
  
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    
  }
}

customElements.define('mh-home-view', HomeView)
