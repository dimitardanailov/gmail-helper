const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;
		}

		::slotted(select) {
			position: relative;
			
			display: flex;
			font-size: 1.4em;
		}
	</style>	

	<slot>
	</slot>
`

export default class GmailSelectBox extends HTMLElement {

  get selectBox() {
    return this._selectBox
  }

  get optionValues() {
    return this._optionValues
  }

  set optionValues(optionValues) {
    return this._optionValues = optionValues
  }

  constructor(optionValues) {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this._optionValues = optionValues
  }

  connectedCallback() {
    this._selectBox = document.createElement('select')
    this.appendChild(this._selectBox)

    this.optionValues.forEach(option => {
      let element = document.createElement('option')
      element.text = option.textValue
      element.setAttribute('value', option.key)

      this._selectBox.appendChild(element)
    })
  }
}

customElements.define('gmail-select-box', GmailSelectBox)
