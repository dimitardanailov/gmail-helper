import { GmailLabelBackgroundGroup } from './backgrounds/GmailLabelBackgroundGroup'
import { GmailLabelColorGroup} from './colors/GmailLabelColorGroup'

import { defaultColorSettings } from '../../models/Label'

import store from '../../redux/store'
import { setLabelBackgroundColor, setLabelColor } from '../../redux/actions'

const unsubscribe = {
	bgColor: null,
	color: null
}

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: block;

			padding: 1em 0;

			border: 1px #999 dashed;	
			border-radius: 6px;
		}

		#title {
			position relative;

			display: block;
			margin-bottom: 1em;

			font-size: 1.8em;
			font-weight: bold;
			text-align: center;
		}

		#preview {
			position: relative;

			display: flex;
			justify-content: center;
			align-items: center;
		}

		#preview-text {
			position: relative;

			display: flex;
			padding: 16px;

			font-size: 1.6em;
			text-align: center;

			background-color: var(--label-bg-color);
			color: var(--label-color);

			border-radius: 5px;
		}

		#color-wrapper {
			
		}

		::slotted(gmail-label-color-group) {
			margin: 1em;
		}

		::slotted(gmail-label-background-group) {
			margin: .5em 2em;
		}

		@media only screen and (max-width: 600px) {
			::slotted(gmail-label-background-group) {
				margin: .5em 1em;
			}
		}
	</style>

	<span id="title">
		Label background and text color
	</span>

	<section id="preview">
		<span id="preview-text">Preview</span>
	</section>

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
		this.addBackgroundColors()
		this.addTextColors()

		this.setDefaultColorStyles()
	}

	disconnectedCallback() {
		if (unsubscribe.bgColor) {
			unsubscribe.bgColor()
		}

		if (unsubscribe.color) {
			unsubscribe.color()
		}
	}

	setDefaultColorStyles() {
		store.dispatch(setLabelBackgroundColor(defaultColorSettings.backgroundColor))
		store.dispatch(setLabelColor(defaultColorSettings.textColor))
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