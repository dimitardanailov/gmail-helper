import { KEYCODE } from '../../config/keycodes'

export class AbstractRadioGroup extends HTMLElement {

  /**
	 * A getter for whichever `RadioButton` is currently checked.
	 */
  get checkedRadioButton() {
    return this.querySelector('[aria-checked="true"]')
  }

  /**
	 * A getter for the first `RadioButton` child.
	 */
  get firstRadioButton() {
    return this.querySelector('[role="radio"]:first-of-type')
  }

  /**
	 * A getter for the last `RadioButton` child.
	 */
  get lastRadioButton() {
    return this.querySelector('[role="radio"]:last-of-type')
  }

  constructor() {
    super()
  }

  /**
	 * If the `GmailRadioGroup` is removed from the DOM, clean up any event
	 * listeners.
	 */
  disconnectedCallback() {
    this.removeEventListener('click', this._onClick)
    this.removeEventListener('keydown', this._onKeyDown)
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
	 * If the user pressed an arrow key, call preventDefault to prevent the
	 * page from scrolling. If the up or left arrow keys were pressed, select
	 * the previous `RadioButton`. If the down or right keys were pressed,
	 * select the next `RadioButton`.
	 */
  _onKeyDown(e) {
    switch (e.keyCode) {
    case KEYCODE.UP:
    case KEYCODE.LEFT:
      e.preventDefault()
      this._setCheckedToPrevButton()
      break
    case KEYCODE.DOWN:
    case KEYCODE.RIGHT:
      e.preventDefault()
      this._setCheckedToNextButton()
      break
			
    case KEYCODE.HOME:
      e.preventDefault()
      this._setChecked(this.firstRadioButton)
      break
			
    case KEYCODE.END:
      e.preventDefault()
      this._setChecked(this.lastRadioButton)
      break

    case KEYCODE.SPACE:
      e.preventDefault()
      if (e.target.getAttribute('role') === 'radio')
        this._setChecked(e.target)
      break
			
    default:
      break
    }
  }

  /**
	 * A helper for when the user tries to moves backwards through the
	 * `AbstractRadioGroup` using their keyboard. Return the `RadioButton`
	 * coming before the one passed as an argument. If no previous
	 * `RadioButton` is found, return null.
	 */
  _prevRadioButton(node) {
    let prev = node.previousElementSibling
    while (prev) {
      if (prev.getAttribute('role') === 'radio') {
        return prev
      }
      prev = prev.previousElementSibling
    }

    return null
  }

  /**
	 * A helper for when the user tries to moves forwards through the
	 * `HowtoRadioGroup` using their keyboard. Return the `HowtoRadioButton`
	 * coming after the one passed as an argument. If no next
	 * `HowtoRadioButton` is found, return null.
	 */
  _nextRadioButton(node) {
    let next = node.nextElementSibling
    while (next) {
      if (next.getAttribute('role') === 'radio') {
        return next
      }
      next = next.nextElementSibling
    }

    return null
  }

  /**
	 * This method is called in response to a user pressing a key to move
	 * backwards through the `RadioGroup`.  Check to see if the currently
	 * checked `RadioButton` is the first child.  If so, loop around and
	 * focus the last child. Otherwise, find the previous sibling of the
	 * currently checked `RadioButton`, and make it the new checked
	 * button.
	 */
  _setCheckedToPrevButton() {
    let checkedButton = this.checkedRadioButton || this.firstRadioButton
    if (checkedButton === this.firstRadioButton) {
      this._setChecked(this.lastRadioButton)
    } else {
      this._setChecked(this._prevRadioButton(checkedButton))
    }
  }

  /**
	 * This method is called in response to a user pressing a key to move
	 * forwards through the `RadioGroup`.  Check to see if the currently
	 * checked `RadioButton` is the last child.  If so, loop around and
	 * focus the first child. Otherwise, find the next sibling of the currently
	 * checked `RadioButton`, and make it the new checked button.
	 */
  _setCheckedToNextButton() {
    let checkedButton = this.checkedRadioButton || this.firstRadioButton
    if (checkedButton === this.lastRadioButton) {
      this._setChecked(this.firstRadioButton)
    } else {
      this._setChecked(this._nextRadioButton(checkedButton))
    }
  }

  /**
	 * Call `focus()` on the passed in node to direct keyboard focus to it.
	 */
  _focusNode(node) {
    node.focus()
  }
}