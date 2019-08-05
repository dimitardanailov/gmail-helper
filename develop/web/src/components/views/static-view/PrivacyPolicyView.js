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

      <h5>Gmail permissions</h5>

      <p>
        <strong>https://www.googleapis.com/auth/gmail.labels</strong>
      </p>

      <p>
        The core application feature is: <strong>Creating gmail labels.</strong>
        Application will have access to gmail label meta data. 
        Gmail Helper doesn't use those permissions to delete or update existing gmail label meta data.
      </p>

      <p>
        <strong>https://www.googleapis.com/auth/gmail.settings.basic</strong>
      </p>

      <p>
        Gmail Helper uses those permissions to create gmail filter. 
        If you want to understand more about gmail scropes please visit: 
        <a href="https://developers.google.com/gmail/api/auth/scopes" 
           title="Gmail scopes" target="_blank">Gmail scopes</a>
      </p>

      <h3>Application workflow / Lifecycle</h3>

      <h5>Authorization</h5>

      <p>
        When an user opens this application for this first time will see a simple button with name: "Authorize".
        Buttons is responsible to create a web token. 
        Web token is able to read gmail meta data, access label meta data and manage basic mail settings.
      </p>

      <h5>Application has an authorization access</h5>

      <p>
        Applications loads a form with these fields:
      </p>

      <ul>
        <li>Label name</li>
        <li>Filter name - User could choice to use the same keyword for filter and label name</li>
        <li>
          Label visibility. The end user has three options: 
          Label to be always hidden, Label always to be visible, 
          Label to be visible if contains at least one email with is waiting to be read
        </li>
        <li>Label colors - The end user can specific label background and text color</li>
        <li>"Add or update gmail meta data" submits form data to Gmail</li>
      </ul>

    `
  }
}

customElements.define('gh-privacy-policy-view', PrivacyPolicyView)
