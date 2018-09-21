import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhLayout extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .layout-container {
          width: 600px;
          height: 100vh;
          margin: 0 auto;
        }
      </style>
      <div class="layout-container">
        <slot name="content"></slot>
      </div>
    `;
  }
  static get properties(){
    return {
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
window.customElements.define('rh-layout', RhLayout);