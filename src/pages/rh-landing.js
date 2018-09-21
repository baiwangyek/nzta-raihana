import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';

export default class RhLanding extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .landing-title {
          text-align: center;
          max-width: 390px;
          margin: 0 auto;
          margin-bottom: 60px;
        }

        .landing-button {
          display: block;
          max-width: 300px;
          margin: 20px auto;
          --custom-button-styles: {
            width: 100%;
            display: block;
          }
        }
      </style>
      <rh-layout>
        <div slot="content">
          <h1 class="h1 font-weight--bold landing-title">Landing Page</h1>
          <rh-button class="landing-button" label="Login/ register with facebook"></rh-button>
          <rh-button class="landing-button" label="Learn more"></rh-button>
        </div>
      </rh-layout>
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
window.customElements.define('rh-landing', RhLanding);