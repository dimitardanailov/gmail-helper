export class GmailLabelTextBox extends HTMLInputElement {
	constructor() {
		super()
	}	

	connectedCallback() {
		this.setAttribute('type', 'text')
	}
}

customElements.define('gmail-label-text-box', GmailLabelTextBox, { extends: 'input' })