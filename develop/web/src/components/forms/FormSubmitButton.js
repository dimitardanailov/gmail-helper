const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}

		input {
			position: relative;
			
			display: flex;
			padding: .6em;
		}

		input[:disabled] {
			opacity: .3;
		}
	</style>	

	<slot></slot>
`

export class FormSubmitButton extends HTMLElement {

	set textValues(value) {
		this._textValues = value
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

	set disabled(val) {
    if (val) {
			this.button.setAttribute('disabled', 'disabled')
			this.button.value = this._textValues.activeState
    } else {
			this.button.removeAttribute('disabled')
			this.button.value = this._textValues.defaultState
    }
  }

	connectedCallback() {		
		this.createSubmitButton()
	}

	createSubmitButton() {
		this.button = document.createElement('input')
		this.button.setAttribute('type', 'submit')
		this.button.value = this._textValues.defaultState || 'Submit'
		this.button.setAttribute('role', 'button')

		this.appendChild(this.button)
	}
}

customElements.define('form-submit-button', FormSubmitButton)