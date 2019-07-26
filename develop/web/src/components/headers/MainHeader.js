import { LitElement, html } from 'lit-element'

import { MailHelperRouter } from '../router/MailHelperRouter'

import './Slogan'

import '@material/mwc-tab-bar'
import '@material/mwc-tab'

const { POPSTATE } = MailHelperRouter.NavigationTrigger
MailHelperRouter.setTriggers(POPSTATE)

export class MainHeader extends LitElement {

  onClickTab(e) {
    const { href } = e.target.dataset

    window.history.pushState({}, null, href);
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  render() {
    return html`
      <gh-slogan></gh-slogan>
      <mwc-tab-bar>
        <mwc-tab label="Home" @click=${this.onClickTab} data-href="/"></mwc-tab>
        <mwc-tab label="Intro" @click=${this.onClickTab} data-href="/intro"></mwc-tab>
        <mwc-tab label="three" @click=${this.onClickTab} data-href="/terms"></mwc-tab>
      </mwc-tab-bar>
    `
  }
}

customElements.define('gh-mainheader', MainHeader)
