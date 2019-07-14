const template = document.createElement('template')

import Auth from '../auth'

import { Router } from '@vaadin/router';

import { routesComponennts } from '../config/routes'

import './views/HomeView'
import './views/IntroView'

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

    gapi.load('client:auth2', () => new Auth())
  }

  connectedCallback() {
    const router = new Router(this._pageWrapper)
    router.setRoutes(routesComponennts)
  }

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

  setAuthListeners() {
    console.log('listeners')
  }
}

customElements.define('gmail-helper', GmailHelper)
