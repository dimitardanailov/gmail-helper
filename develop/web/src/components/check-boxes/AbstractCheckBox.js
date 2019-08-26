import { KEYCODE } from '../../config/keycodes'

export default class AbstractCheckBox extends HTMLElement {

  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['checked', 'disabled']
  }

  get checked() {
    return this.hasAttribute('checked')
  }

  set checked(value) {
    const isChecked = Boolean(value)

    if (isChecked) 
      this.setAttribute('checked', 'checked')
    else 
      this.removeAttribute('checked') 
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value) {
    const isDisabled = Boolean(value)

    if (isDisabled)
      this.setAttribute('disabled', 'disabled')
    else 
      this.removeAttribute('disabled')
  }

  /**
	 * Method adds:
	 * - role
	 * - tab index
	 * - set checked and disabled properties
	 * - set 
	 */
  loadDefaultConfigurations() {
    if (!this.hasAttribute('role'))
      this.setAttribute('role', 'checkbox')
			
    if (!this.hasAttribute('tabindex'))
      this.setAttribute('tabindex', 0)

    this._upgradeProperty('checked')
    this._upgradeProperty('disabled')
  }

  /**
	 * 
	 */
  disconnectedCallback() {
    this.removeEventListener('keyup', this._onKeyUp)
    this.removeEventListener('click', this._onClick)
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop]
      delete this[prop]
      this[prop] = value
    }
  }

  /**
	 * `attributeChangedCallback()` is called when any of the attributes in the
	 * `observedAttributes` array are changed. It's a good place to handle
	 * side effects, like setting ARIA attributes.
	 */
  attributeChangedCallback(name, oldValue, newValue) {
    const hasValue = newValue !== null

    switch (name) {
    case 'checked':
      this.setAttribute('aria-checked', hasValue)
      break
			
    case 'disabled':
      this.setAttribute('aria-disabled', hasValue)

      // The `tabindex` attribute does not provide a way to fully remove
      // focusability from an element.
      // Elements with `tabindex=-1` can still be focused with
      // a mouse or by calling `focus()`.
      // To make sure an element is disabled and not focusable, remove the
      // `tabindex` attribute.
      if (hasValue) {
        this.removeAttribute('tabindex')

        // If the focus is currently on this element, unfocus it by
        // calling the `HTMLElement.blur()` method.
        this.blur()
      } else {
        this.setAttribute('tabindex', '0')
      }
      break
    }
  }

  _onKeyUp(e) {
    // Don’t handle modifier shortcuts typically used by assistive technology.
    if (e.altKey) return

    switch (e.keyCode) {
    case KEYCODE.SPACE:
      e.preventDefault()
      this._toggleChecked(this.checked)
      break
      // Any other key press is ignored and passed back to the browser.
    default:
      return
    }
  }
}
