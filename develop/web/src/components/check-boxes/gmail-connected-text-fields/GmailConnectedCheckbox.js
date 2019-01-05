import { AbstractCheckBox } from '../AbstractCheckBox'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: block;
			width: 24px;
			height: 24px;

			background-color: red;

			cursor: pointer;
		}
	</style>
`

export class GmailConnectedCheckbox extends AbstractCheckBox {

	constructor() {
		super()

		// Attach a shadow root to the element.
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}

	connectedCallback() {
		this.loadDefaultConfigurations()

		this.onclick = 
			e => this._toggleChecked(e.target.checked)
	}

	/**
	 * `_toggleChecked()` calls the `checked` setter and flips its state.
	 */
	_toggleChecked(isChecked) {
		if (this.disabled) return

		this.checked = !isChecked

		console.log(isChecked)
	}
}

customElements.define('gmail-connected-checkbox', GmailConnectedCheckbox)