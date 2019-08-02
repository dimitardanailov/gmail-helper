import { css, html } from 'lit-element'

import BasicStaticView from './BasicStaticView'

export class PrivacyPolicyView extends BasicStaticView {
  static get styles() {
    return [
      super.styles,
      css`
      `
    ]
  }

  render() {
    return html`
      <h1>Privacy Policy of Mail Helper</h1>

      Last modified: August 2, 2019

      <p>
        Mail helper operates on Fireabse web hosting: 
        <a href="https://fir-playgrounds.firebaseapp.com" 
           target="_blank" 
           title="Mail helper">https://fir-playgrounds.firebaseapp.com</a>.

        Application allows users to add gmail labels or filters.
      </p>

      <h5>Application type:</h5>

      <p>
        Mail helper helps on gmail i
      </p>

      <h5>Terms of service</h5>

      <p>
        The terms used in this Privacy Policy has the same meanings like "Terms and Conditions".
        If you want to read the full version of "terms of services": 
        <a href="terms.html" 
           title="Mail helper - Terms of service" 
           target="_blank">https://fir-playgrounds.firebaseapp.com/terms.html</a>
      </p>

      <h3>Why I've been working on this tool ?</h3>

      <p>
        Each day my mailbox receives a significant amount of emails. My goals with this tools: 
        better organization. I'm big fan of labels and filters. 
        End of 2018 I decided to work on to create a personal assitant. 
        Mail Helper fast and easy creates: <strong>gmail labels and filters</strong>
      </p>

      <h5>Structure data</h5>

      <p>
        I'd like to introduce a new technical term on this stage: <strong>structure data</strong>.
        <strong>structure data</strong>: email message has least one gmail label and filter.
      </p>
      
      <p>
        My tools wants to give you better way to increase structure data. 
      </p>
    `
  }
}

customElements.define('gh-privacy-policy-view', PrivacyPolicyView)
