import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-image/iron-image.js';

import RhTwoColLayout from '../layout/rh-two-col-layout.js';
import RhInput from '../elements/rh-input.js';
import RhButton from '../elements/rh-button.js';

export default class RhApplicationListBeforeExam extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .side-image {
          height: 100vh;
          width: 100%;
        }

        .page-item {
          margin: 40px 0;
          display: block;
        }

        .half-item {
          width: 50%;
          margin-right: 20px;
        }

        .two-col-container {
          display: flex;
        }

        .two-col-container > *{
          flex: 1;
          margin-right: 20px;
        }
        .two-col-container > *:last-of-type{
          margin-right: 0;
        }

        .CTA-container {
          margin-top: 60px;
        }

        .CTA-container > a {
          display: inline-block; 
          margin-right: 30px;
        }

        .CTA-container > rh-button:last-of-type {
          margin-right: 0;
        }

        .before-exam-subtitle {
          margin: 40px 0 10px;
        }

        .before-ul {
          padding-left: 30px;list-style-type: disc;
        }

        .before-ul > li {
          padding-left: 5px;
          margin: 5px 0;
        }

        .before-license {
          margin-top: 40px;
          display: block;
        }
      </style>
      <rh-two-col-layout>
      <div slot="content-one">
          <h2 class="h3 font-weight--med application-list-title sub-title-spacing">Before you begin your test</h2>
          <p>We need a referee to monitor you while you do your test.</p>
          <h4 class="h4 before-exam-subtitle">Your referee should:</h4>
          <ul class="before-ul">
            <li>Be over 16</li>
            <li>Not be a family member or live in the same houseold</li>
            <li>Have a full license</li>
            <li>Have a Realme login</li>
          </ul>
          <p style="margin-top: 30px;">To continue, get your referee to enter their driver license number login to RealMe</p>
          <rh-input class="before-license" type="text" label="License Number" style=""></rh-input>
          <div class="CTA-container">
            <a href="/applicationList/realme"><rh-button label="Next"></rh-button></a>
            <rh-button ghost on-click="goBack" label="Back"></rh-button>
          </div>
        </div>
        <div slot="content-two">
          <iron-image class="side-image" sizing="cover" preload src="../../images/before-exam.png"></iron-image>
        </div>
      </rh-two-col-layout>
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

  goBack() {
    window.history.back();
  }
}
window.customElements.define('rh-application-list-before-exam', RhApplicationListBeforeExam);