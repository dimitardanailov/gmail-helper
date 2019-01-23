require('./GmailConnectedCheckbox')

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
			
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
		}

		label {
			font-size: 1.6em;
		}

		gmail-connected-checkbox {
			margin-left: .4em;
		}

  </style>
  
  <label></label>
  <gmail-connected-checkbox />
`

export class GmailConnectedTextFields extends HTMLElement {

  /**
   * @returns {GmailConnectedCheckbox}
   */
  get checkBox() {
    return this._checkbox
  }

  /**
   * @returns {HTMLLabelElement}
   */
  get label() {
    return this._label
  }

  /**
	 * @param {String} textNode
	 */
  set labelTextNode(textNode) {
    this._labelTextNode = textNode
    this._label.innerHTML = textNode
  }

  set checked(isChecked) {
    this._checkbox.checked = isChecked
    this._checkbox._updateTextFieldsStyle(isChecked)
  }
	
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this._label = this.shadowRoot.querySelectorAll('label')[0]
    this._checkbox = this.shadowRoot.querySelectorAll('gmail-connected-checkbox')[0]
  }	

  connectedCallback() {
    this._label.innerHTML = this._labelTextNode

    this._label.onclick = e => this._toggleCheckboxChecked(e)
  }

  disconnectedCallback() {
    this._label.removeEventListener('click', this._toggleCheckboxChecked)
  }

  _toggleCheckboxChecked(e) {
    e.preventDefault()
    this._checkbox._toggleChecked(this._checkbox.checked)
  }
}

customElements.define('gmail-connected-text-fields', GmailConnectedTextFields)
