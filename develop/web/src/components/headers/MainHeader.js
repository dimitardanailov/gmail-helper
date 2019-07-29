import { LitElement, html } from 'lit-element'

import '@material/mwc-tab-bar'
import '@material/mwc-tab'

import MailHelperRouter from '../router/MailHelperRouter'

import './Slogan'

import './AppBar'

const { POPSTATE } = MailHelperRouter.NavigationTrigger
MailHelperRouter.setTriggers(POPSTATE)

export class MainHeader extends LitElement {

  onClickTab(e) {
    const { href } = e.target.dataset

    window.history.pushState({}, null, href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  render() {
    return html`
      <div>
        <gh-app-bar></gh-app-bar>
      </div>
      <gh-slogan></gh-slogan>
      <div>
        <mwc-tab-bar>
          <mwc-tab label="Home" @click=${this.onClickTab} data-href="/"></mwc-tab>
        </mwc-tab-bar>
      </div>
    `
  }
}

customElements.define('gh-main-header', MainHeader)
