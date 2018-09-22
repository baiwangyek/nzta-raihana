import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-image/iron-image.js';

import RhTwoColLayout from '../layout/rh-two-col-layout.js';
import RhInput from '../elements/rh-input.js';
import RhButton from '../elements/rh-button.js';

export default class RhPersonalListPersonal extends PolymerElement {
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

        .CTA-container > rh-button {
          display: inline-block; 
          margin-right: 40px;
        }

        .CTA-container > rh-button:last-of-type {
          margin-right: 0;
        }
      </style>
      <rh-two-col-layout>
        <div slot="content-one">
          <h2 class="h3 font-weight--med application-list-title sub-title-spacing">Personal Details</h2>
          <p>We need to get to know you before you get your license :) <br> Enter a few details below:</p>
          <div class="two-col-container page-item">
            <rh-input type="text" placeholder="First name here" label="First name"></rh-input>
            <rh-input type="text" placeholder="Last name here" label="Last name"></rh-input>
          </div>
          <div class="two-col-container page-item">
            <rh-input type="text" placeholder="12 June 1999" label="Birthday"></rh-input>
            <rh-input type="text" placeholder="Auckland" label="Where were you born?"></rh-input>
          </div>
          <rh-input class="page-item" type="text" placeholder="105 Cook Street" label="Home address"></rh-input>
          <rh-input class="page-item half-item" type="text" placeholder="021456382" label="Phone number"></rh-input>
          <rh-input class="page-item half-item" type="text" placeholder="Indeterminate" label="Gender"></rh-input>
          <div class="CTA-container">
            <a href="/applicationList/medical"><rh-button label="Next"></rh-button></a>
            <rh-button ghost on-click="goBack" label="Back"></rh-button>
          </div>
        </div>
        <div slot="content-two">
          <iron-image class="side-image" sizing="cover" preload src="../../images/personal-image.png"></iron-image>
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
window.customElements.define('rh-application-list-personal', RhPersonalListPersonal);