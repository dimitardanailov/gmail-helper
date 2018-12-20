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
		this.updateTextFieldsStyle(isChecked)
	}
	
	constructor() {
		super()
	}	

	connectedCallback() {
		this.checkbox = document.createElement('input')
		this.checkbox.setAttribute('type', 'checkbox')
		this.checkbox.onchange = e => this.updateTextFieldsStyle(e.target.checked)

		this.label = document.createElement('label')
		this.label.appendChild(document.createTextNode(this._labelTextNode))
		this.label.appendChild(this.checkbox)

		this.wrapper = document.createElement('section')
		this.wrapper.appendChild(this.label)

		this.appendChild(this.wrapper)
	}

	updateTextFieldsStyle(isChecked) {
		if (isChecked) {
			this._escortTextField.style.display = 'none'
		} else {
			this._escortTextField.style.display = 'block'
		}
	}
}

customElements.define('gmail-connected-text-fields', GmailConnectedTextFields)