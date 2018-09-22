import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';

export default class RhApplicationListIdentity extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
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
      </style>
      <rh-layout narrow>
        <div slot="content">
          <h2 class="h2 font-weight--bold title-spacing">Prove identity</h2>
          <p class="p identity-description">We need your ID
          The following types of ID are available:
            - NZ passport
            - Birth certificate
          </p>
          <div class="CTA-container">
            <rh-button class="identity-button" label="Upload File" on-click="uploadFileHandler"></rh-button>
            <rh-button class="identity-button" label="Take photo"></rh-button>
          </div>
          <template is="dom-if" if=[[uploadFile]]>
            <div>
              <div class="passport-container" style="">
                <img class="passport-img" src="../../images/passport.png">
                <p class="passport-name">passport.jpg</p>
                <iron-icon icon="icons:clear"></iron-icon>
              </div>
            </div>
          </template>
          <rh-button style="display: block; margin-bottom: 20px; margin-top: 40px;" label="Next"></rh-button>
          <rh-button on-click="goBack" label="Back"></rh-button>
        </div>
      </rh-layout>
    `;
  }
  static get properties(){
    return {
      uploadFile: {
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

  uploadFileHandler() {
    this.set('uploadFile', true);
  }

  goBack() {
    window.history.back();
  }
}
window.customElements.define('rh-application-list-identity', RhApplicationListIdentity);