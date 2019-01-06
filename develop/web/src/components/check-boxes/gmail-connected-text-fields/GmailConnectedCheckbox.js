import { AbstractCheckBox } from '../AbstractCheckBox'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: block;
			width: 16px;
			height: 16px;
			padding: .2em;

			border: 2px solid green;
			border-radius: .2em;

			cursor: pointer;
		}

		:host([hidden]) {
			display: none;
		}

		:host([checked]) {
			background-color: red;
		}

		:host([disabled]) {
			background-color: #ccc;
		}

		:host([checked][disabled]) {
			background-color: yellow;
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
	}
}

customElements.define('gmail-connected-checkbox', GmailConnectedCheckbox)