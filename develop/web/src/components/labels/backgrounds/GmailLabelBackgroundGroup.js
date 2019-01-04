import { GmailLabelBackgroundColor } from './GmailLabelBackgroundColor'
import { AbstractRadioGroup } from '../../radio-buttons/AbstractRadioGroup'

import { Label } from '../../../models/Label'

import store from '../../../redux/store'
import { setLabelBackgroundColor } from '../../../redux/actions'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: block;
		}

		span {
			position: relative;

			display: block;
			margin-bottom: .3em;

			text-align: center;
			font-size: 1.6em;
		}

		div {
			position: relative;

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
	</style>

	<span>
		Choose a background color:
	</span>

	<div>
		<slot></slot>
	</div>
`

export class GmailLabelBackgroundGroup extends AbstractRadioGroup {
	constructor() {
		super()

		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}

	connectedCallback() {
		if (!this.hasAttribute('role')) 
			this.setAttribute('role', 'radiogroup')

		const backgroundColors = Label.availableBackgroundColors()
		backgroundColors.forEach(bgColor => {
			this.appendChild(new GmailLabelBackgroundColor(bgColor))
		})

		this._uncheckAll()

		this.onclick = e => this._onClick(e)
	}

	/**
	 * Mark the passed in node as being checked by setting `aria-checked=true`,
	 * and make it focusable by setting `tabindex=0`.
	 */
	_checkNode(node) {
		node.setAttribute('aria-checked', 'true')
		node.tabIndex = 0

		store.dispatch(setLabelBackgroundColor(node.bgColor))
	}
}

customElements.define('gmail-label-background-group', GmailLabelBackgroundGroup)