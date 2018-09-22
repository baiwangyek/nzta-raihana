import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhApplicationListExamDone extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .header {
          display: flex;
          padding: 20px 40px;
          justify-content: space-between;
          align-items: center;
        }

        .header-time {
          margin-right: 100px;
        }

        .header-indicator-container {
          flex: 1;
        }

        .header-indicator {
          background: black;
          height: 10px;
          border-radius: 60px;
          margin-bottom: 5px;
        }

        .header-indicator--done {
          border: 2px solid black;
          background: none;
        }

        .header-questions {
          font-size: 12px;
        }
      </style>
      <div class="header">
        <p class="header-time" class="h3">12:00 left</p>
        <div class="header-indicator-container">
          <div class="header-indicator header-indicator--done"></div>
          <p class="header-questions font-weight--bold">0 questions left</p>
        </div>
      </div>
      <div>
        <h1 class="h1 font-weight--med">You passed!</h1>
        <h1 class="h1 font-weight--med">You scored 35 / 35</h1>
        <rh-button label="Next"></rh-button>
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
window.customElements.define('rh-application-list-exam-done', RhApplicationListExamDone);