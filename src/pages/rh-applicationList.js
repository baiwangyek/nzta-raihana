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
        .application-list-title {
          text-align: center;
        }

        .application-list-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #979797;
          max-width: 400px;
          padding: 10px;
          background: #eee;
          margin: 15px auto;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <app-route route="{{subroute}}" pattern="[[rootPath]]:applicationListStep" data="{{subrouteData}}"></app-route>

      <rh-layout>
        <div slot="content">
          <h2 class="h2 font-weight--bold application-list-title title-spacing">If you want your license be an awesome person and do these things</h2>
          <template is="dom-repeat" items="[[applicationList]]">
            <div class="application-list-card">
              <p class="p">[[item.label]]</p>
              <rh-button data-step$=[[item.step]] label="Start" on-click="goToApplicationStep"></rh-button>
            </div>
          </template>
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
          {label: 'Prove your identity', step:'identity'},
          {label: 'Personal details', step:'personal'},
          {label: 'Health checkup', step:'medical'},
          {label: 'Start the exam', step:'exam'}
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