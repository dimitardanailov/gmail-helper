import { GmailLabelBackgroundGroup } from './backgrounds/GmailLabelBackgroundGroup'
import { GmailLabelColorGroup} from './colors/GmailLabelColorGroup'

import store from '../../redux/store'

const unsubscribe = {
	bgColor: null,
	color: null
}

const template = document.createElement('template')
const defaulStyles = {
	bgColor: '#ddd',
	color: '#666'
}

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: block;
		}

		#preview {
			position: relative;

			display: flex;
			justify-content: center;
			align-items: center;
		}

		#preview-text {
			position: relative;

			display: inline-block;
			padding: 16px;

			font-size: 1.6em;
			text-align: center;

			background-color: var(--label-bg-color);
			color: var(--label-color);

			border-radius: 5px;
		}

		.
	</style>

	<div id="preview">
		<span id="preview-text">Label</span>
	</div>

	<slot></slot>
`

export class GmailLabelColorHolder extends HTMLElement {
	constructor() {
		super()

		// Attach a shadow root to the element.
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}

	connectedCallback() {
		this.style.setProperty('--label-bg-color', defaulStyles.bgColor)
		this.style.setProperty('--label-color', defaulStyles.color)

		this.addBackgroundColors()
		this.addTextColors()
	}

	addBackgroundColors() {
		const group = new GmailLabelBackgroundGroup()
		this.appendChild(group)

		unsubscribe.bgColor = store.subscribe(() => {
			let bgColor = store.getState()['labelBackgroundColor']
			if (bgColor !== null) this.style.setProperty('--label-bg-color', bgColor)
		})
	}

	addTextColors() {
		const group = new GmailLabelColorGroup()
		this.appendChild(group)

		unsubscribe.color = store.subscribe(() => {
			let color = store.getState()['labelColor']
			if (color !== null) this.style.setProperty('--label-color', color)
		})
	}
}

customElements.define('gmail-label-color-holder', GmailLabelColorHolder)