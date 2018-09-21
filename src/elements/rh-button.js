import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhButton extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .button {
          background: black;
          color: white;
          font-size: 14px;
          border: none;
          padding: 14px 40px;
          border-radius: 50px;
          cursor: pointer;

          @apply --custom-button-styles;
        }
      </style>
      <button class="button font-weight--bold">[[label]]</button>
    `;
  }
  static get properties(){
    return {
      label: String
    }
  }
  static get observers() {
    return [
    ]
  }
  connectedCallback() {
    super.connectedCallback();
  }
}
window.customElements.define('rh-button', RhButton);