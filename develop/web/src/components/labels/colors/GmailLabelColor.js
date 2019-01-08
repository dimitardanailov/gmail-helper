const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			position: relative;

			display: flex;
			margin: 2px;

			padding: 12px;

			cursor: pointer;
			border-radius: 5px;
			border: 1px solid #ccc;

			color: var(--color);
			font-weight: 400;
			font-style: italic;
		}
	</style>

	<span>Label</span>
`

export class GmailLabelColor extends HTMLElement {
  get color() {
    return this._color
  }

  constructor(color) {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this._color = color
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) 
      this.setAttribute('role', 'radio')
		
    if (!this.hasAttribute('tabindex'))
      this.setAttribute('tabindex', -1)

    this.style.setProperty('--color', this._color)
  }
}

customElements.define('gmail-label-color', GmailLabelColor)