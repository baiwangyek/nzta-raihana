import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-image/iron-image.js';
import RhTwoColLayout from '../layout/rh-two-col-layout.js';

import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';

import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
 
export default class RhApplicationListIdentity extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .side-image {
          height: 100vh;
          width: 100%;
          opacity: 0.001;
          transition: 0.4s;
          transform: translate3d(100%,0,0);
        }

        .side-image--show {
          opacity: 0.999;
          transform: translate3d(0,0,0);
        }

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
          margin: 20px 0;
          background-color: white;
          padding: 10px;
          border-radius: 5px;
        }

        .passport-container__container {
          display: flex;
          align-items: center;
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
      <rh-two-col-layout>
        <div slot="content-one">
          <h2 class="h3 font-weight--med application-list-title sub-title-spacing">Take a selfie!</h2>
          <p class="p identity-description">We need a photo of you for your license :-)
          </p>
          <div class="CTA-container">
            <rh-button class="identity-button" label="Upload File" on-click="uploadFileHandler"></rh-button>
            <rh-button class="identity-button" label="Take photo"></rh-button>
          </div>
          <template is="dom-if" if=[[uploadFile]]>
            <div>
              <div class="passport-container" style="">
                <template is="dom-if" if=[[verifying]]>
                  <div style="display: flex; align-items: center; padding: 20px 0; justify-content: center;"><img src="../../images/25.gif" style="width: 16px; height: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;Verifying...</div>
                </template>
                <template is="dom-if" if=[[!verifying]]>
                  <div style="display: flex; align-items: center; padding: 20px 0; justify-content: center;">✅ Verified</div>
                </template>
                <div class="passport-container__container">
                  <img class="passport-img" src="../../images/walt.png">
                  <p class="passport-name">photo.jpg</p>
                  <iron-icon icon="icons:clear"></iron-icon>
                </div>
              </div>
            </div>
          </template>
          <a href="/applicationList/personal">
            <rh-button style="display: inline-block; margin-right: 20px; margin-top: 40px;" label="Next"></rh-button>
          </a>
          <rh-button ghost on-click="goBack" label="Back"></rh-button>
        </div>
        <div slot="content-two">
          <iron-image class="side-image" sizing="cover" preload src="../../images/personal-image.png"></iron-image>
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
      verifying: {        
        type: Boolean,
        value: false
      },
      active: {
        type: Boolean,
        value: false
      }
    }
  }
  static get observers() {
    return [
      '_showAnimation(active)'
    ]
  }
  connectedCallback() {
    super.connectedCallback();
  }

  _showAnimation(active) {
    afterNextRender(this, ()=>{
      (active)?
        this.shadowRoot.querySelector('.side-image').classList.add('side-image--show'):
        this.shadowRoot.querySelector('.side-image').classList.remove('side-image--show')
    })
  }

  uploadFileHandler() {
    this.set('uploadFile', true);
    this.set('verifying', true)
    setTimeout(() => {
      this.set('verifying', false)
    }, 1500);
  }

  goBack() {
    window.history.back();
  }
}
window.customElements.define('rh-application-list-identity', RhApplicationListIdentity);