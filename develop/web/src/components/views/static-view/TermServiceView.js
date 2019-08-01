import { css } from 'lit-element'

import BasicStaticView from './BasicStaticView'

export class TermServiceView extends BasicStaticView {
  static get styles() {
    return [
      super.styles,
      css`
      `
    ]
  }
}

customElements.define('gh-term-service-view', TermServiceView)
