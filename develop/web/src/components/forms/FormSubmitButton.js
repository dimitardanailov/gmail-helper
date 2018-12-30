const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: flex;
			width: 32px;
			height: 32px;

			padding: 16px;
			border-radius: 5px;
		}
		
	</style>
`

export class FormSubmitButton extends HTMLInputElement {
	
	set textValues(value) {
		this._textValues = value
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
	
	constructor() {
		super()

		// Attach a shadow root to the element.
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))

		this.textValues = {
			defaultState: 'Submit',
			activeSate: 'Waiting ...'
		}
	}

	connectedCallback() {
		this.setAttribute('type', 'submit')
		this.value = this._textValues.defaultState || 'Submit'
	}
}

customElements.define('form-submit-button', FormSubmitButton, { extends: 'input' })