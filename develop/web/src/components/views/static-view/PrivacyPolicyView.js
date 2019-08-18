import { css, html } from 'lit-element'

import BasicStaticView from './BasicStaticView'

export default class PrivacyPolicyView extends BasicStaticView {
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

      Last modified: August 17, 2019

      <p>
        The main purpose of Mail helper is creating gmail labels and filters.
      </p>

      <h5>Application type:</h5>

      <p>
        Mail helper is a personal assistant / mail extension 
        which creates gmail labels and filters much easier vs gmail workflow.
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
        Each day my mailbox receives a significant amount of emails. My goals with this tools is 
        a better organization. I'm a big fan of labels and filters. 
        End of 2018 I decided to work and create a personal assitant.
        My main goals was to increase 
        <span class="bold">structure data</span> and reduce 
        <span class="bold">unstructure emails</span>. 
      </p>

      <h5>Structure data</h5>

      <p>
        I'd like to introduce a new technical term on this stage: 
        <span class="bold">structure data</span>.
        <span class="bold">structure data</span>: email message has least one gmail label and filter.
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
        Mail Helper doesn't use those permissions 
        to delete or update existing gmail label meta data.
      </p>

      <p>
        <strong>https://www.googleapis.com/auth/gmail.settings.basic</strong>
      </p>

      <p>
        Mail Helper uses those permissions to create gmail filter. 
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
        Applications loads a form with those fields:
      </p>

      <ul>
        <li>Label name</li>
        <li>
          Filter name
          User could choice to use the same keyword for filter and label name
        </li>
        <li>
          Label visibility - The end user has three options: 
          <ul>
            <li>Label to be always hidden;
            <li>Label always to be visible;
            <li>Label to be visible if contains at least one email with is waiting to be read;
          </ul>
        </li>
        <li>Label colors - The end user can specific label background and text color
        </li>
        <li>"Add or update gmail meta data" submits form data to Gmail</li>
      </ul>

      <h5>Required and optional fields</h5>

      <p>
        Required fields are: Label name, filter name
      </p>

      <p>
        Optional fields are: Label visibility, Label background color and text color. 
        Label visibility has optional value to Label hide, 
        Label Background color: #efefef and text color: #999999
      </p>

      <h5>Algorithm</h5>

      <p>
        The end user should add a valid label and filter name. 
        Application creates a gmail record which desired settings. 
      </p>

      <h3>Mail helper stores:</h3>
      
      <p>
        Application stores: json web token, gmail labels and filters.
      </p>

      <h5>JSON auth web token</h5>
      
      <p>
        Application creates an <strong>unique</strong> web token. 
        If browser has this token, application "skip" authorization process. 
      </p>

      <h5>Gmail labels and filters</h5>
      
      <p>
        Application uses a background task to retreive your gmail labels and filters. 
        Application requires this data to reduce network bandwith between Mail helper and Gmail REST API.
      </p>

      <h3>What this application doesn't do</h5>

      <ul>
        <li>Our service doesn't <strong>delete or update your label meta data</strong></li>
        <li>Our service doesn't <strong>delete or update your filter meta data.</strong></li>
        <li>Our service doesn't <strong>access other mail settings</strong><li>
        <li><strong>Our serice doesn't shares a data with other applications !!!</strong></li>
      </ul>

      <h3>Hosting</h3>

      <p>
        Applications uses Firebase hosting provider. 
        Firebase uses https protocol to protect each request.
      </p>

      <h5>What's https ?</h5>

      <p>
        Https provides an encrypted connection between browser and server. 
        This connections DOESN'T allow something to sniffing web trace and "steal" your web token. 
        If you want to learn more about firebase please visit: 
        <a href="https://firebase.google.com/docs/hosting/" target="_blank">Firebase hosting</a>
      </p>

      <h3>I don't want to use Mail Helper anymore</h3>

      <p>
				Mail helper is a typical third party application that requires access to your Gmail account.
				If you don't want to use my application please read these instrctions: 
				<a href="https://support.google.com/accounts/answer/3466521?hl=en"
					 title="Third-party sites & apps with access to your account">Third-party sites & apps with access to your account</a>
      </p>
      
      <h3>Children's Privacy</h3>
					
      <p>
        This services requires your age to be at least 13 years old. 
        We required this because we want application to be a compatible with 
        <a href="https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy" 
            target="_blank" title="Children's Privacy - COPA">COPA</a>
      </p>

      <h3>Contact Us</h3>
					
      <p>
        If you have any questions or suggestions about our Privacy Policy, 
        do not hesitate to <a href="https://twitter.com/d_danailov" target="_blank">contact us</a>.
      </p>

      <h3>License and Source code</h3>

      <p>
        Application is under 
        <a href="https://opensource.org/licenses/MIT" target="_blank" title="MIT License">MIT License</a>
      </p>

      <p>
        Source code could be found on Github:
        <a href="https://github.com/dimitardanailov/gmail-helper"></a> 
      </p>
    `
  }
}

customElements.define('gh-privacy-policy-view', PrivacyPolicyView)
