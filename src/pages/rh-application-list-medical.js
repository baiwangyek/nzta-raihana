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
          <rh-input class="page-item half-item"  label="Do you wear glasses or contacts?" type="dropdown"></rh-input>
          <rh-input class="page-item half-item" label="Do you have any disabilities" type="dropdown" on-dropdown-change="showHideDisabilityInput"></rh-input>
          <template is="dom-if" if=[[showDisabilityInput]]>
            <rh-input class="page-item" type="textarea" label="What kind of disabilities?"></rh-input>
          </template>
          <rh-input class="page-item" type="number" label="What your NIH Number?"></rh-input>
          <!-- <rh-input class="page-item" type="number" label="What your NIH Number?"></rh-input> -->

          <!-- <rh-input class="page-item" type="text" placeholder="105 Cook Street" label="Home address"></rh-input> -->
          <div class="CTA-container">
            <rh-button label="Next"></rh-button>
            <rh-button ghost on-click="goBack" label="Back"></rh-button>
          </div>
        </div>
        <div slot="content-two">
          <iron-image class="side-image" sizing="cover" preload src="../../images/medical-image.png"></iron-image>
        </div>
      </rh-two-col-layout>
      <!-- <style>
        .identity-description {
          white-space: pre-line;
        }

        .CTA-container {
          margin-top: 40px;
        }

        .identity-button {
          margin-right: 10px;          
          --custom-button-styles: {
            width: calc(50% - 10px);
          }
        }

        .identity-button:last-of-type {
          margin-right: 0;
        }

        .passport-container {
          display: flex;
          align-items: center;
          margin: 20px 0;
          background-color: #F3F3F3;
          padding: 10px;
          border-radius: 5px;
        }

        .passport-img {
          width: 100px;
          margin-right: 20px;
        }

        .passport-name {
          flex: 1;
        }

        iron-icon {
          cursor: pointer;
        }

        .two-col-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .two-col-container > * {
          flex: 1;
          margin-right: 20px;
        }

        .two-col-container > *:last-of-type {
          margin-right: 0;
        }
      </style>
      <rh-layout narrow>
        <div slot="content">
          <h2 class="h2 font-weight--bold title-spacing">Medical</h2>
          <div class="two-col-container">
            <rh-input label="Do you have any disabilities" type="dropdown" on-dropdown-change="showHideDisabilityInput"></rh-input>
            <rh-input label="Do you wear glasses or contacts?" type="dropdown"></rh-input>
          </div>

          <template is="dom-if" if=[[showDisabilityInput]]>
            <rh-input type="textarea" style="margin-top: 40px; display: block;" label="What kind of disabilities?"></rh-input>
          </template>

          <rh-button style="display: block; margin-bottom: 20px; margin-top: 40px;" label="Next"></rh-button>
          <rh-button label="Back" on-click="goBack"></rh-button> 
        </div>
      </rh-layout> -->
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
}
window.customElements.define('rh-application-list-medical', RhApplicationListMedical);