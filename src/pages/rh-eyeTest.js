import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/app-route/app-location.js';

import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';
export default class RhApplicationList extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .application-list-title {
          text-align: center;
        }

        .application-list-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #979797;
          max-width: 400px;
          padding: 10px;
          background: #eee;
          margin: 15px auto;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <rh-layout>
        <div slot="content">
          <h2 class="h2 font-weight--bold application-list-title title-spacing">Eye Test</h2>
          <p>🅱</p>
          <rh-input id="eye-test-character"/>
          <rh-button data-id="123" data-step$=[[item.step]] label="Next" on-click="checkEyeTestCharacter()"></rh-button>
        </div>
      </rh-layout>
    `;
  }
  static get properties(){
    return {}
  }
  static get observers() {
    return [
    ]
  }

  connectedCallback() {
    super.connectedCallback();
  }

  goToApplicationStep(e) {
    var applicationStep = e.currentTarget.dataset.step;
    console.log(applicationStep);
  }

  checkEyeTestCharacter(e) {
    const character = this.shadowRoot.querySelector("#eye-test-character").value;
    console.log('character',character);
  }

}
window.customElements.define('rh-eye-test', RhApplicationList);