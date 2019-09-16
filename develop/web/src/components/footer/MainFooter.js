import { LitElement, html } from 'lit-element'

import MailHelperRouter from '../router/MailHelperRouter'

const { POPSTATE } = MailHelperRouter.NavigationTrigger
MailHelperRouter.setTriggers(POPSTATE)

export default class MainFooter extends LitElement {
  onClickTab(e) {
    e.preventDefault()
    
    const { href } = e.target.dataset

    window.history.pushState({}, null, href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  render() {
    return html`
      <footer>
        <nav>
          <li>
            <a data-href="/" @click=${this.onClickTab}>Home page</a>
          </li>
          <li>
            <a data-href="/privacy" @click=${this.onClickTab}>Privacy</a>
          </li>
        </nav>
      </footer>
    `
  }
}

customElements.define('gh-main-footer', MainFooter)
