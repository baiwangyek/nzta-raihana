import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
import '@polymer/iron-image/iron-image.js';

export default class RhApplicationListBeforeExamConfirm extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .exam-confirm-card {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          background: white;
          max-width: 610px;
          width: 90%;
          margin: 0 auto;
          margin-top: 90px;
          padding: 30px;
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
          margin-top: 20px;
        }

        .complete-title {
          margin-top: 40px;
        }
      </style>
      <div class="exam-confirm-card">
        <h3 style="line-height: 1.6;" class="h4 font-weight--bold">You are about to supervise the following person. <br>
            Does everything match up?
        </h3>
        <div style="display: flex; margin-top: 30px;">
          <iron-image sizing="cover" src="../../images/walt.png" class="complete-image" style="border-radius: 100px;"></iron-image>
          <div class="complete-details-column">
            <h3 class="h2">Walter Lim</h3>
            <p class="copy-item">Learner License Exam</p>
            <h3 class="h3 complete-title">About</h3>
            <p class="copy-item">Date of birth: 28/4/1997 (21 years old)</p>
            <p class="copy-item">Address: 8b Tuatara Street, Orakei, Wellington</p>
            <div class="CTA-container">
              <a style="display: inline-block; margin-right: 20px;" href="/applicationList/exam-ready"><rh-button label="Confirm"></rh-button></a>
              <a href="/applicationList/before-exam"><rh-button label="Cancel"></rh-button></a>
            </div>
          </div>
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
window.customElements.define('rh-application-list-before-exam-confirm', RhApplicationListBeforeExamConfirm);