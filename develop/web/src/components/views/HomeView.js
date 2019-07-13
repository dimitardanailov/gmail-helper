import { AbstractView } from './AbstractView'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}
	</style>

  <h2>Home Page ...</h2>
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
