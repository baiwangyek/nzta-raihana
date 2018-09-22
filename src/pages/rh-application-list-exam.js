import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-image/iron-image.js';

export default class RhApplicationListExam extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .header {
          display: flex;
          padding: 20px 40px;
          justify-content: space-between;
          align-items: center;
        }

        .header-time {
          margin-right: 100px;
        }

        .header-indicator-container {
          flex: 1;
        }

        .header-indicator {
          background: black;
          height: 10px;
          border-radius: 60px;
          margin-bottom: 5px;
        }

        .header-questions {
          font-size: 12px;
        }

        .question-container {
          max-width: 600px;
          margin: 0 auto;
          width: 90%;
        }

        .question-title {
          margin: 40px 0 30px 0;
        }

        .question-image {
          height: 250px;
          width: 100%;
          border-radius: 10px;
        }

        .question-description {
          font-size: 20px;
          margin: 30px 0;
        }

        .answers-container {
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 30px;
        }

        .answers-card {
          background: white;
          width: calc(50% - 10px);
          margin-right: 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          padding: 25px;
          line-height: 1.8;
          box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          cursor: pointer;
        }

        .answers-card:nth-of-type(2n) {
          margin-right: 0;
        }

        .answers-card:hover {
          box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.15), 0 1px 2px 0 rgba(0,0,0,0.2);
          box-shadow: 2px 2px 24px 0 rgba(141,141,141,0.5);
        }

        .answers-text {
          font-size: 14px;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <div class="header">
        <p class="header-time" class="h3">60:00 left</p>
        <div class="header-indicator-container">
          <div class="header-indicator"></div>
          <p class="header-questions font-weight--bold">35 questions left</p>
        </div>
      </div>
      <div class="question-container">
        <h2 class="question-title h2 font-weight--med">Questions 1</h2>
        <iron-image class="question-image" sizing="cover" preload src="../../images/exam-1.png"></iron-image>
        <p class="question-description" class="h3 font-weight--med">Select the correct answer. You're a good driver if...</p>
        <div class="answers-container">
          <template is="dom-repeat" items="[[answersList]]">
            <div class="answers-card" on-click="goToExamDone">
              <p class="answers-text">[[item]]</p>
            </div>
          </template>
        </div>
      </div>
    `;
  }
  static get properties(){
    return {
      answersList: {
        type: Array,
        value: ['You ask what’s going on around you', 'You’re totally aware of what\’s going on around you', 'You have no idea what\’s going on around you', 'You’re often aware of what\’s going on around you']
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

  goToExamDone() {
    this.set('route.path', '/applicationList/exam-done');
  }
}
window.customElements.define('rh-application-list-exam', RhApplicationListExam);