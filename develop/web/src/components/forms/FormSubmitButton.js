const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			margin-top: 1em;

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}

		::slotted(input) {
			position: relative;
			cursor: pointer;

			padding: 1em;

			background: #000;
			color: #fff;
			font-size: 1.3em;

			border-radius: .5em;

			border: .1em solid #fff;
		}

		::slotted(input:hover) {
			background: #fff;
			color: #000;
			border: .1em solid #000;
		}

		::slotted(input[:disabled]) {
			opacity: .3;
		}
	</style>	

	<slot>
		<input type="submit" role="button" value="Submit" />
  </slot>
`

export default class FormSubmitButton extends HTMLElement {

  get button() {
    return this._button
  }

  get textValues() {
    return this._textValues
  }

  set textValues(value) {
    this._textValues = value
  }
	
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this._textValues = {
      defaultState: 'Submit',
      activeState: 'Waiting ...'
    }
  }

  set disabled(val) {
    if (val) {
      this._button.setAttribute('disabled', 'disabled')
      this._button.setAttribute('value', this._textValues.activeState)
    } else {
      this._button.removeAttribute('disabled')
      this._button.value = this.textValues.defaultState
    }
  }

  connectedCallback() {		
    this.createSubmitButton()
  }

  createSubmitButton() {
    this._button = this.shadowRoot.querySelectorAll('input')[0]
    this._button.value = this._textValues.defaultState || 'Submit'

    this.appendChild(this.button)
  }
}

customElements.define('form-submit-button', FormSubmitButton)
