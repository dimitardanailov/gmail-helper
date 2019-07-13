const template = document.createElement('template')
import { Router } from '@vaadin/router';

import HomeView from './views/HomeView'
import IntroView from './views/IntroView'

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
  
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/Intro">Intro</a></li>
  </ul>

  <section>
    <slot></slot>
  </section>
`

export class GmailHelper extends HTMLElement {

  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this._pageWrapper = this.shadowRoot.querySelectorAll('section')[0]
  }

  connectedCallback() {
    const router = new Router(this._pageWrapper)
    router.setRoutes([
      {path: '/',     component: 'gh-home-view'},
      {path: '/intro',  component: 'gh-intro-view'},
      {path: '(.*)', component: 'x-not-found-view'},
    ])
  }
}

customElements.define('gmail-helper', GmailHelper)
