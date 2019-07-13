import loadRoutes from '../router/MailHelperRouter'
import {Router} from '@vaadin/router';

import { MailHelperNavigationItem } from './MailHelperNavigationItem'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      position: relative;

      display: flex;
      flex-direction: column;
    }
  </style>

  <ul>
    <li><a href="/">Home</a>
    <li><a href="/intro">Intro</a>
  </ul>

  <nav></nav>

  <slot></slot>
`

export class MailHelperNavigation extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    // const el = new MailHelperNavigationItem()
    // this.appendChild(el)

    this._nav = this.shadowRoot.querySelectorAll('nav')[0]
    console.log(this._nav)

    loadRoutes(this._nav)
  }

  disconnectedCallback() {
  }
}

customElements.define('mail-helper-navigation', MailHelperNavigation)
