export class GmailSelectBox extends HTMLSelectElement {

	constructor(optionValues) {
		super()

		this.optionValues = optionValues
	}

	connectedCallback() {
		let element
		this.optionValues.forEach(option => {
			element = document.createElement('option')
			element.text = option.textValue
			element.setAttribute('value', option.key)

			this.appendChild(element)
		})
	}

}

customElements.define('gmail-select-box', GmailSelectBox, { extends: 'select' })