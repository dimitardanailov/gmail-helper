const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      position: relative;

      display: flex;
      flex-direction: column;
    }
  </style>

  Hello nav !!!
`

export class MailHelperNavigation extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    console.log('here ...')
  }
}

customElements.define('mail-helper-navigation', MailHelperNavigation)
