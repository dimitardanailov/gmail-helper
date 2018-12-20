export class GmailFilterTextBox extends HTMLInputElement {
	constructor() {
		super()
	}	

	connectedCallback() {
		this.setAttribute('type', 'text')
		this.setAttribute('placeholder', 'Please add a filter')
	}
}

customElements.define('gmail-filter-text-box', GmailFilterTextBox, { extends: 'input' })