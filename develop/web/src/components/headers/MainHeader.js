import { LitElement, html } from 'lit-element'

import '@material/mwc-tab-bar'
import '@material/mwc-tab'

export class MainHeader extends LitElement {

  constructor() {
    super()
  }

  onClickTab(e) {
    const page = e.target.getAttribute('data-page')
    
    window.location.href = `/${page}`
    console.log('page', page)
  }

  render() {
    return html`
      <mwc-tab-bar>
        <mwc-tab label="Home" @click=${this.onClickTab} data-page=""></mwc-tab>
        <mwc-tab label="Intro" @click=${this.onClickTab} data-page="intro"></mwc-tab>
        <mwc-tab label="three" @click=${this.onClickTab} data-page="terms"></mwc-tab>
      </mwc-tab-bar>
    `
  }
}

customElements.define('gh-mainheader', MainHeader)
