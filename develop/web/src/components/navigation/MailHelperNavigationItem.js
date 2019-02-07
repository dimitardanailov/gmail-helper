const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      position: relative;
    }
  </style>

  Item !!!
`

export class MailHelperNavigationItem extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }
}

customElements.define('mail-helper-navigation-item', MailHelperNavigationItem)

