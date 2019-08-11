import generateTemplate from './generateTemplate'

const template = generateTemplate('Please add a label')

export default class GmailLabelTextBox extends HTMLElement {

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

customElements.define('gmail-label-text-box', GmailLabelTextBox)
