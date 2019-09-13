import { LitElement, html } from "lit-element";

import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";

export class AppBar extends LitElement {
  render() {
    return html`
      <mwc-top-app-bar>
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
        <div slot="title" id="title">Standard</div>
        <mwc-icon-button
          icon="exit_to_app"
          slot="actionItems"
          @click="${this.handleClick}"
        ></mwc-icon-button>
      </mwc-top-app-bar>
    `;
  }

  handleClick(e) {
    console.log('click')
  }
}

customElements.define("gh-app-bar", AppBar);
