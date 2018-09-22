import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-image/iron-image.js';

export default class RhComplete extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .complete-card-container {
          background: white;
          max-width: 620px;
          width: 90%;
          margin: 0 auto;
          margin-top: 90px;
          height: calc(100vh - 90px);
          padding: 30px;
          display: flex;
          border-radius: 10px;
          box-shadow: 2px 2px 24px 0 rgba(141,141,141,0.5);
        }

        .complete-image {
          height: 120px;
          width: 120px;
        }

        .complete-details-column {
          flex: 1;
          margin-left: 30px;
        }

        .copy-item {
          margin: 5px 0;
        }

        .CTA-container {
          margin: 20px 0;
        }

        .complete-title {
          margin-top: 40px;
        }
      </style>
      <div class="complete-card-container">
        <iron-image sizing="cover" src="../../images/complete.png" class="complete-image"></iron-image>
        <div class="complete-details-column">
          <h3 class="h2">Lina Tan</h3>
          <p class="copy-item">Learner License</p>
          <p>DS123456 V200</p>
          <div class="CTA-container">
            <rh-button label="View Code"></rh-button>
            <rh-button label="Update Details"></rh-button>
          </div>
          <h3 class="h3 complete-title">About</h3>
          <p class="copy-item">Date of birth: 28/4/1997 (21 years old)</p>
          <p class="copy-item">Address: 8b Tuatara Street, Orakei, Wellington</p>
          <h3 class="h3 complete-title">Health</h3>
          <p class="copy-item">Organ Donor</p>
          <p class="copy-item">No conditions</p>
        </div>
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
window.customElements.define('rh-complete', RhComplete);