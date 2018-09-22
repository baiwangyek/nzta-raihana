import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhInput extends PolymerElement {
  constructor() {

  }
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .input {
          font-size: 14px;
          border: none;
          border-bottom: 1px solid black;
          padding: 5px 10px;
          @apply --custom-button-styles;
        }
      </style>
      <input type="[[type]]" class="input"/>
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

  getValue() {
    return this.shadowRoot.querySelector("input").value;
  }
}
window.customElements.define('rh-input', RhInput);