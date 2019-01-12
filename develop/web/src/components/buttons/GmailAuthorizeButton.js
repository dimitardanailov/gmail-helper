import generateTemplate from './generateTemplate'

const template = generateTemplate('Authorize')

export class GmailAuthorizeButton extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.addEventListener('click', this.handleAuth)
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) 
      this.setAttribute('role', 'button')
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleAuth)
  }

  /**
   *  Sign in the user upon button click.
   */
  handleAuth() {
    gapi.auth2.getAuthInstance().signIn()
  }
}

customElements.define('gmail-authorize-button', GmailAuthorizeButton)
