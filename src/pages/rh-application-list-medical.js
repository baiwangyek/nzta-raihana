import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-image/iron-image.js';

import RhTwoColLayout from '../layout/rh-two-col-layout.js';
import RhInput from '../elements/rh-input.js';
import RhButton from '../elements/rh-button.js';

export default class RhApplicationListMedical extends PolymerElement {
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
          <h2 class="h3 font-weight--med application-list-title sub-title-spacing">Health checkup</h2>
          <p>We need a few details about your health to continue</p>
          <rh-input id="glasses" class="page-item half-item"  label="Do you wear glasses or contacts?" type="dropdown"></rh-input>
          <rh-input id="haveDisability" class="page-item half-item" label="Do you have any disabilities" type="dropdown" on-dropdown-change="showHideDisabilityInput"></rh-input>
          <template is="dom-if" if=[[showDisabilityInput]]>
            <rh-input id="nhi" class="page-item" type="number" label="What your NIH Number?"></rh-input> 
            <rh-input id="disabilities" class="page-item" type="textarea" label="(Optional) If you don’t have a NIH Number, what disabilities do you have?"></rh-input>
          </template>
          <div class="CTA-container">
            <a href="/eyeTest">
              <rh-button label="Next" on-click="saveAndNext"></rh-button>
            </a>
            <rh-button ghost on-click="goBack" label="Back"></rh-button>
          </div>
        </div>
        <div slot="content-two">
          <iron-image class="side-image" sizing="cover" preload src="../../images/medical-image.png"></iron-image>
        </div>
      </rh-two-col-layout>
    `;
  }
  static get properties(){
    return {
      uploadFile: {
        type: Boolean,
        value: false
      },
      showDisabilityInput: {
        type: Boolean,
        value: false
      }
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

  uploadFileHandler() {
    this.set('uploadFile', true);
  }

  showHideDisabilityInput(e) {
    if(e.detail.selectedIndex === '0'){
      this.set('showDisabilityInput', true);
    }
    else if(e.detail.selectedIndex === '1') {
      this.set('showDisabilityInput', false);
    }
  }

  saveAndNext() {
    console.log(this.shadowRoot.querySelector('#glasses').getValue());
    if(this.showDisabilityInput) {
      console.log(this.shadowRoot.querySelector('#nhi').getValue());
      console.log(this.shadowRoot.querySelector('#disabilities').getValue());
    }

  }
}
window.customElements.define('rh-application-list-medical', RhApplicationListMedical);