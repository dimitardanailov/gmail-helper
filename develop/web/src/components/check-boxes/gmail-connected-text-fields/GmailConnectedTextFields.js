import { GmailConnectedCheckbox } from './GmailConnectedCheckbox'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
			
			display: flex;
			font-size: 1.4em;
		}

	</style>

	<slot></slot>
`

/**
 * If checkbox is checked -> escortTextField should be ignored
 * If checkbox isn't checked -> escortTextField has an independ value
 */
export class GmailConnectedTextFields extends HTMLElement {

	/**
	 * @param {HTMLInputElement} textField 
	 */
	set primaryTextField(textField) {
		this._primaryTextField = textField
	}

	/**
	 * @param {HTMLInputElement} textField 
	 */
	set escortTextField(textField) {
		this._escortTextField = textField
	}

	/**
	 * @param {String} textNode
	 */
	set labelTextNode(textNode) {
		this._labelTextNode = textNode
	}

	setChecked(isChecked) {
		this.checkbox.checked = isChecked
		this._toggleChecked(isChecked)
	}
	
	constructor() {
		super()

		// Attach a shadow root to the element.
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}	

	connectedCallback() {
		/*
		this.checkbox = document.createElement('input')
		this.checkbox.setAttribute('type', 'checkbox')
		this.checkbox.onchange = 
			e => this.updateTextFieldsStyle(e.target.checked)
		*/

		this.checkbox = new GmailConnectedCheckbox()
		// this.appendChild(checkbox)
		this.checkbox.onclick = 
			e => this._toggleChecked(e.target.checked)

		this.label = document.createElement('label')
		this.label.appendChild(document.createTextNode(this._labelTextNode))
		this.label.appendChild(this.checkbox)

		this.appendChild(this.label)
	}

	/**
	 * `_toggleChecked()` calls the `checked` setter and flips its state.
	 */
	_toggleChecked(isChecked) {
		if (this.checkbox.disabled) return

		this.checkbox.checked = !isChecked

		this._updateTextFieldsStyle(this.checkbox.checked)
	}

	_updateTextFieldsStyle(isChecked) {
		console.log(isChecked)

		if (isChecked) {
			this._escortTextField.style.display = 'none'
		} else {
			this._escortTextField.style.display = 'block'
		}
	}
}

customElements.define('gmail-connected-text-fields', GmailConnectedTextFields)