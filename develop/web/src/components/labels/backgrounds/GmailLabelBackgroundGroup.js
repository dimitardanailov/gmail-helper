import { GmailLabelBackgroundColor } from './GmailLabelBackgroundColor'
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

export class GmailLabelBackgroundGroup extends HTMLElement {
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
	 * If the `RadioGroup` is removed from the DOM, clean up any event
	 * listeners.
	 */
	disconnectedCallback() {
		this.removeEventListener('click', this._onClick)
	}

	/**
	 * Only one `GmailLabelBackgroundColor` should be checked at any time. 
	 * To ensure this, loop through all `GmailLabelBackgroundColor` children and set them to
	 * `aria-checked=false` and `tabindex=-1`.
	 */
	_uncheckAll() {
		const radioButtons = this.querySelectorAll('[role="radio"]')

		for (let i = 0; i < radioButtons.length; i++) {
			let button = radioButtons[i]
			button.setAttribute('aria-checked', 'false')
			button.tabIndex = -1
		}
	}

	/**
	 * If the user clicks inside of the `GmailLabelBackgroundColor`, verify that the
	 * clicked element has a `role` of `radio`, and if so, make it the new
	 * checked button.
	 */
	_onClick(e) {
		e.preventDefault()

		if (e.target.getAttribute('role') === 'radio') {
			this._setChecked(e.target)
		}
	}

	/**
	 * Any user action (a keypress or mouse click) eventually funnels down to
	 * this method which ensures that only the passed in element is checked.
	 * Uncheck _all_ `GmailLabelBackgroundGroup` children. Then set the
	 * `GmailLabelBackgroundColor` that was passed in to `aria-checked=true`. Also make
	 * it focusable with `tabIndex=0` and call its `focus()` method.
	 */
	_setChecked(node) {
		this._uncheckAll()
		this._checkNode(node)
		this._focusNode(node)
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

	/**
	 * Call `focus()` on the passed in node to direct keyboard focus to it.
	 */
	_focusNode(node) {
		node.focus()
	}
}

customElements.define('gmail-label-background-group', GmailLabelBackgroundGroup)