import { LitElement, css } from 'lit-element'


class BasicStaticView extends LitElement {
  
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `
  }
}
