export class GmailLabelTextBox extends HTMLInputElement {
	constructor() {
		super()
	}	

	connectedCallback() {
		this.setAttribute('type', 'text')
		this.setAttribute('placeholder', 'Please add a label')
	}
}

customElements.define('gmail-label-text-box', GmailLabelTextBox, { extends: 'input' })