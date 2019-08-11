import generateTemplate from './generateTemplate'

const template = generateTemplate('Please add a filter')

export default class GmailFilterTextBox extends HTMLElement {
	
  get textBox() {
    return this._textBox
  }
	
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this._textBox = this.shadowRoot.querySelectorAll('input')[0]
  }
}

customElements.define('gmail-filter-text-box', GmailFilterTextBox)
