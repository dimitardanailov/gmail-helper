import { GmailConnectedCheckbox } from './GmailConnectedCheckbox'

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

		::slotted(label) {
			font-size: 1.6em;
		}

		::slotted(gmail-connected-checkbox) {
			margin-left: .4em;
		}

	</style>

	<slot></slot>
`

export class GmailConnectedTextFields extends HTMLElement {

	get checkBox() {
		return this._checkbox
	}

	/**
	 * @param {String} textNode
	 */
	set labelTextNode(textNode) {
		this._labelTextNode = textNode
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
	}	

	connectedCallback() {
		this._label = document.createElement('label')
		this._label.appendChild(document.createTextNode(this._labelTextNode))
		this.appendChild(this._label)

		this._checkbox = new GmailConnectedCheckbox()
		this.appendChild(this._checkbox)

		this._label.onclick = e => {
			e.preventDefault()
			this._checkbox._toggleChecked(this._checkbox.checked)
		}
	}

	disconnectedCallback() {
		this._label.removeEventListener('click')
	}
}

customElements.define('gmail-connected-text-fields', GmailConnectedTextFields)