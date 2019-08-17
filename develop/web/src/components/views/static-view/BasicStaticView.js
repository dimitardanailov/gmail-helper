import { LitElement, css } from 'lit-element'

export default class BasicStaticView extends LitElement {
  
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .bold {
        font-weight: bold;
      }
    `
  }
}
