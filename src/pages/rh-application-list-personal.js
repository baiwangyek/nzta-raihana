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

        .CTA-container > a {
          display: inline-block; 
          margin-right: 30px;
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
            <rh-input id="fname" type="text" placeholder="First name here" label="First name"></rh-input>
            <rh-input id="lname" type="text" placeholder="Last name here" label="Last name"></rh-input>
          </div>
          <div class="two-col-container page-item">
            <rh-input id="birthday" type="text" placeholder="12 June 1999" label="Birthday"></rh-input>
            <rh-input id="birthplace" type="text" placeholder="Auckland" label="Where were you born?"></rh-input>
          </div>
          <rh-input id="address" class="page-item" type="text" placeholder="105 Cook Street" label="Home address"></rh-input>
          <rh-input id="phonenum" class="page-item half-item" type="text" placeholder="021456382" label="Phone number"></rh-input>
          <rh-input id="gender" class="page-item half-item" type="text" placeholder="Indeterminate" label="Gender"></rh-input>
          <div class="CTA-container">
            <a href="/applicationList/medical"><rh-button label="Next" on-click="saveDetails"></rh-button></a>
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

  saveDetails() {    
    // var database = firebase.firestore();
    // database.collection("user-details").doc("personal_info").set({
    //   address: this.shadowRoot.querySelector('#address').getValue(),
    //   birthplace: this.shadowRoot.querySelector('#birthplace').getValue(),
    //   birthday: this.shadowRoot.querySelector('#birthday').getValue(),
    //   first_name: this.shadowRoot.querySelector('#fname').getValue(),
    //   gender: this.shadowRoot.querySelector('#gender').getValue(),
    //   last_name: this.shadowRoot.querySelector('#lname').getValue(),
    //   phone_num: this.shadowRoot.querySelector('#phonenum').getValue()
    // })
    // .then(function() {
    //     console.log("Document successfully written!");
    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });
  }
  
}
window.customElements.define('rh-application-list-personal', RhPersonalListPersonal);