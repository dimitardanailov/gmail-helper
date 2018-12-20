export class FormSubmitButton extends HTMLInputElement {
	
	set textValues(value) {
		this._textValues = value
	}
	
	constructor() {
		super()
		this.textValues = {
			defaultState: 'Submit',
			activeSate: 'Waiting ...'
		}
	}

	set disabled(val) {
    if (val) {
			this.setAttribute('disabled', 'disabled')
			this.style.opacity = .3
			this.value = this._textValues.activeState
    } else {
			this.removeAttribute('disabled')
			this.style.opacity = 1
			this.value = this._textValues.defaultState
    }
  }

	connectedCallback() {
		this.setAttribute('type', 'submit')
		this.value = this._textValues.defaultState || 'Submit'
	}
}

customElements.define('form-submit-button', FormSubmitButton, { extends: 'input' })