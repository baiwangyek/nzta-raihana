import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhTwoColLayout extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .layout-container {
          display: flex;
        }
        .layout-container > div {
          flex: 1;
          width: 100%;
          height: 100vh;
        }
      </style>
      <div class="layout-container">
        <div style="padding: 90px 80px"><slot name="content-one"></slot></div>
        <div><slot name="content-two"></slot></div>
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
window.customElements.define('rh-two-col-layout', RhTwoColLayout);