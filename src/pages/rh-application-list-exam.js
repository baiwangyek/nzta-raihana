import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhApplicationListExam extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .header {
          display: flex;
          padding: 20px 40px;
          justify-content: space-between;
        }

        .header-time {
          margin-right: 100px;
        }

        .header-indicator {
          flex: 1;
        }
      </style>
      <div class="header">
        <p class="header-time" class="h3">60:00 left</p>
        <div class="header-indicator">
          <div style="
    background: black;
    height: 10px;
    border-radius: 60px;
    margin-bottom: 5px;
"></div>
          <p style="
    font-size: 12px;
" class="font-weight--bold">35 questions left</p>
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
window.customElements.define('rh-application-list-exam', RhApplicationListExam);