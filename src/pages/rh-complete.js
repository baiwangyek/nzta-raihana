import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhComplete extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      
      <div>
        <!-- <div>
          <iron-image sizing="cover" preload src="../../images/complete.png"></iron-image>
          <div>

          </div>
        </div> -->
        <iron-image sizing="cover" preload src="../../images/complete.png"></iron-image>
        <div>
          <h3>Lina Tan</h3>
          <p>Learner License</p>
          <p>DS123456 V200</p>
          <div>
            <rh-button label="View Code"></rh-button>
            <rh-button label="Update Details"></rh-button>
          </div>
          <h3>About</h3>
          <p>Date of birth: 28/4/1997 (21 years old)</p>
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