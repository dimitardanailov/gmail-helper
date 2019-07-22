import { AbstractView } from './AbstractView'

import '../headers/MainHeader'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}
	</style>

  <gh-mainheader></gh-mainheader>

  <section>
    <h2>Home Page ...</h2>
  </section> 
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
