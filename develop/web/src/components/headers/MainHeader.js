import { LitElement, html } from 'lit-element'
import { Router } from '@vaadin/router'

import '@material/mwc-tab-bar'
import '@material/mwc-tab'

const { POPSTATE } = Router.NavigationTrigger
Router.setTriggers(POPSTATE)

export class MainHeader extends LitElement {

  constructor() {
    super()
  }

  onClickTab(e) {
    const { href } = e.target.dataset

    window.history.pushState({}, null, href);
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  render() {
    return html`
      <mwc-tab-bar>
        <mwc-tab label="Home" @click=${this.onClickTab} data-href="/"></mwc-tab>
        <mwc-tab label="Intro" @click=${this.onClickTab} data-href="/intro"></mwc-tab>
        <mwc-tab label="three" @click=${this.onClickTab} data-href="/terms"></mwc-tab>
      </mwc-tab-bar>
    `
  }
}

customElements.define('gh-mainheader', MainHeader)
