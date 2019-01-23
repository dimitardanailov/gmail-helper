const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: flex;
			padding: 16px;
			margin: 2px;

			background-color: var(--bg-color);

			cursor: pointer;
			border-radius: 5px;
			border: 1px solid #ccc;
		}
	</style>
`

export class GmailLabelBackgroundColor extends HTMLElement {

  get bgColor() {
    return this._bgColor
  }

  set bgColor(bgColor) {
    this._bgColor = bgColor
    this.style.setProperty('--bg-color', this._bgColor)
  }

  constructor(bgColor) {
    super()

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(template.content.cloneNode(true))

    this._bgColor = bgColor
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) 
      this.setAttribute('role', 'radio')
		
    if (!this.hasAttribute('tabindex'))
      this.setAttribute('tabindex', -1)

    this.style.setProperty('--bg-color', this._bgColor)
  }
}

customElements.define('gmail-label-background-color', GmailLabelBackgroundColor)
