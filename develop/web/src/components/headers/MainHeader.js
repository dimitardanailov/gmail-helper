import { LitElement, html } from 'lit-element'

import '@material/mwc-tab-bar'
import '@material/mwc-tab'

export class MainHeader extends LitElement {

  onClickTab(e) {
    console.log(e.target.getAttribute('data-page'))
  }

  render() {
    return html`
      <mwc-tab-bar>
        <mwc-tab label="one" @click=${this.onClickTab} data-page="home"></mwc-tab>
        <mwc-tab label="two" @click=${this.onClickTab} data-page="privacy"></mwc-tab>
        <mwc-tab label="three" @click=${this.onClickTab} data-page="terms"></mwc-tab>
      </mwc-tab-bar>
    `
  }
}

customElements.define('gh-mainheader', MainHeader)
