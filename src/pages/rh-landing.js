import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';


import '@polymer/app-route/app-location.js';

import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';

export default class RhLanding extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .landing-title {
          text-align: center;
          max-width: 450px;
          margin: 0 auto;
          margin-bottom: 60px;
        }

        .landing-button {
          display: block;
          max-width: 300px;
          margin: 20px auto;
          --custom-button-styles: {
            width: 100%;
            display: block;
          }
        }
      </style>
      <app-location route="{{route}}"></app-location>
      <rh-layout>
        <div slot="content">
          <h1 class="h1 font-weight--bold landing-title title-spacing">Landing Page</h1>
          <rh-button class="landing-button" label="Connect with RealMe" on-click="login"></rh-button>
          <rh-button class="landing-button" label="Learn more"></rh-button>
        </div>
      </rh-layout>
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

  login() {
  // Get a reference to the database service
  //   var database = firebase.firestore();
  //   database.collection("user-details").doc("personal_info").set({
  //     address: "test add",
  //     birthplace: "Auckland",
  //     birthday: Date.now(),
  //     first_name: "Jane",
  //     gender: "female",
  //     last_name: "Doe",
  //     phone_num: "+640000000"
  // })
  // .then(function() {
  //     console.log("Document successfully written!");
  // })
  // .catch(function(error) {
  //     console.error("Error writing document: ", error);
  // });
   
   this.set('route.path','/applicationList');
  }
  writeUserData(userId, name, email, imageUrl) {
    
  }
}
window.customElements.define('rh-landing', RhLanding);