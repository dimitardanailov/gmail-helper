export class FormSubmitButton extends HTMLInputElement {
	constructor() {
		super()
	}

	set disabled(val) {
    if (val) {
			this.setAttribute('disabled', 'disabled')
			this.style.opacity = .3
    } else {
			this.removeAttribute('disabled')
			this.style.opacity = 1
    }
  }

	connectedCallback() {
		this.setAttribute('type', 'submit')
	}
}

customElements.define('form-submit-button', FormSubmitButton, { extends: 'input' })