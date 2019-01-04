export class AbstractRadioGroup extends HTMLElement {

	constructor() {
		super()
	}

	/**
	 * If the `GmailRadioGroup` is removed from the DOM, clean up any event
	 * listeners.
	 */
	disconnectedCallback() {
		this.removeEventListener('click', this._onClick)
	}

	/**
	 * Only one `GmailRadioGroup` should be checked at any time. 
	 * To ensure this, loop through all `RadioButton` children and set them to
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
	 * If the user clicks inside of the `GmailRadioGroup`, verify that the
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
	 * Uncheck _all_ `GmailRadioGroup` children. Then set the
	 * `RadioButton` that was passed in to `aria-checked=true`. Also make
	 * it focusable with `tabIndex=0` and call its `focus()` method.
	 */
	_setChecked(node) {
		this._uncheckAll()
		this._checkNode(node)
		this._focusNode(node)
	}

	/**
	 * Call `focus()` on the passed in node to direct keyboard focus to it.
	 */
	_focusNode(node) {
		node.focus()
	}
}