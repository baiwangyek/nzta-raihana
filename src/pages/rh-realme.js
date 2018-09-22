import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
// import '@polymer/iron-image/iron-image.js';

export default class RhRealme extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        img {
          width: 100vw;
        }

        .realme-container {
          background: #232a2d; 
          min-height: 100vh;
          position: relative;
        }

        .bottom-img {
          margin: 0;
          position: relative;
          top: -10px;
        }

        .link {
          width: 7vw;
          display: inline-block;
          position: fixed;
          top: 39.3vw;
          left: 12.1vw;
          height: 3.5vw;
        }

        .return-link {
          position: fixed;
          top: 10vw;
          left: 12vw;
          width: 8vw;
          height: 3vw;
          z-index: 1;
        }

        .hide-blue {
          height: 5.1vw;
          width: 40vw;
          background: #e8f3fc;
          position: fixed;
          top: 8.7vw;
          left: 17.4vw;
        }

      </style>
      <div class="realme-container">
        <img src="../../images/realme.png" />
        <img class="bottom-img" src="../../images/realme-2.png" />
        <a class="link" href="/applicationList/before-exam-confirm"></a>
        <a class="return-link" href="/applicationList/before-exam"></a>
        <div class="hide-blue"></div>
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
window.customElements.define('rh-realme', RhRealme);