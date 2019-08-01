import { css } from 'lit-element'

import BasicStaticView from './BasicStaticView'

export class PrivacyPolicyView extends BasicStaticView {
  static get styles() {
    return [
      super.styles,
      css`
      `
    ]
  }
}

customElements.define('gh-privacy-policy-view', PrivacyPolicyView)
