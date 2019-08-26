import AbstractCheckBox from '../AbstractCheckBox'

const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: inline-block;
			width: 18px;
			height: 18px;
			padding: .2em;

			border: 3px solid #efefef;
			border-radius: .2em;

			cursor: pointer;
		}

		:host([hidden]) {
			display: none;
		}

		:host([checked]) {
			border: 3px solid #999999;
			background-color: #999999;
		}

		:host([disabled]) {
			background-color: #ccc;
		}

		:host([checked][disabled]) {
			background-color: yellow;
		}
	</style>
`

/**
 * `GmailConnectedCheckbox` is a simple a web component to toggle elements
 * 
 * If checkbox is `checked` -> `escortTextField` should be hidden
 * If checkbox isn't checked -> `escortTextField` is visible
 */
export default class GmailConnectedCheckbox extends AbstractCheckBox {

  /**
   * @returns {HTMLElement} 
   */
  get primaryTextField() {
    return this._primaryTextField
  }
  
  /**
	 * @param {HTMLElement} textField 
	 */
  set primaryTextField(textField) {
    this._primaryTextField = textField
  }

  /**
   * @returns {HTMLElement} 
   */
  get escortTextField() {
    return this._escortTextField
  }

  /**
	 * @param {HTMLElement} textField 
	 */
  set escortTextField(textField) {
    this._escortTextField = textField
  }

  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.loadDefaultConfigurations()

    this.onclick = e => this._toggleChecked(e.target.checked)
    this.addEventListener('keyup', this._onKeyUp)
  }

  /**
	 * `_toggleChecked()` calls the `checked` setter and flips its state.
	 */
  _toggleChecked(isChecked) {
    if (this.disabled) return

    this.checked = !isChecked
    this._updateTextFieldsStyle()
  }

  /**
   * `_updateTextFieldsStyle` updates `this._escortTextField` display styles
   */
  _updateTextFieldsStyle() {
    if (this.checked) {
      this._escortTextField.style.display = 'none'
    } else {
      this._escortTextField.style.display = 'block'
    }
  }
}

if (!customElements.get('gmail-connected-checkbox')) {
  customElements.define('gmail-connected-checkbox', GmailConnectedCheckbox)
}
