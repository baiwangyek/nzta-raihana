import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';
export default class RhApplicationList extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .application-list-card {
          padding: 30px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.15), 0 1px 2px 0 rgba(0,0,0,0.2);
          box-shadow: 2px 2px 24px 0 rgba(141,141,141,0.5);
          margin-right: 20px;
          text-align: center;
          max-width: 350px;
          transition: 0.4s;
          display: flex;
          flex-direction: column;

        }

        .application-list-card:hover {
          box-shadow: 6px 6px 24px 8px rgba(141,141,141,0.5);
        }

        .application-list-card:last-of-type {
          margin-right: 0;
        }
        
        .application-list-card > img {
          width: 100%;
        }
        .application-list-card > p {
          margin: 10px 0 20px 0;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <app-route route="{{subroute}}" pattern="[[rootPath]]:applicationListStep" data="{{subrouteData}}"></app-route>

      <rh-layout>
        <div slot="content">
          <h3>Hi Lina</h3>
          <h2 class="h2 font-weight--bold application-list-title title-spacing">There are 3 things left to do to get your license</h2>
          <div style="display: flex; justify-content: space-between;">
            <template is="dom-repeat" items="[[applicationList]]">
              <div class="application-list-card">
                <img src="[[item.image]]"/>
                <h3 class="p font-weight--bold">[[item.title]]</h3>
                <p style="flex: 1;" class="p">[[item.description]]</p>
                <rh-button data-step$=[[item.step]] label="Start" on-click="goToApplicationStep"></rh-button>
              </div>
            </template>
          </div>
        </div>
        <input id="input">
      </rh-layout>
    `;
  }
  static get properties(){
    return {
      applicationList: {
        type: Array,
        value: [
          {title: 'Tell us about yourself', description:'Enter some personal details to get started',image: '../../images/application-list-one.png', step:'personal'},
          {title: 'Do a medical check', description: 'We need some info about your health', image: '../../images/application-list-two.png', step:'medical'},
          {title: 'Start the exam', description: 'Finish everything before starting this', image: '../../images/application-list-three.png', step:'before-exam'}
        ]
      },
      routeData: Object,
      subroute: Object
    }
  }
  static get observers() {
    return [
    ]
  }
  connectedCallback() {
    super.connectedCallback();
    
  }

  goToApplicationStep(e) {
    var applicationStep = e.currentTarget.dataset.step;
    this.set('subroute.path', applicationStep);
  }
}
window.customElements.define('rh-application-list', RhApplicationList);