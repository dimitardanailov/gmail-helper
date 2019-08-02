import { css, html } from 'lit-element'

import BasicStaticView from './BasicStaticView'

export class TermServiceView extends BasicStaticView {
  static get styles() {
    return [
      super.styles,
      css`
      `
    ]
  }

  render() {
    return html`
      
    `
  }
}

customElements.define('gh-term-service-view', TermServiceView)
