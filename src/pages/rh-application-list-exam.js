import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-pages/iron-pages.js';

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
          position: relative;
        }

        .header-indicator {
          /* background: black; */
          height: 10px;
          border-radius: 60px;
          margin-bottom: 5px;
          background: transparent;
          border: 2px solid black;
        }

        .header-indicator--doneness {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          /* width: calc(100% / 5 - 1px); */
          background: black;
        }

        .header-questions {
          font-size: 12px;
        }

        .question-container {
          max-width: 600px;
          margin: 0 auto;
          width: 90%;
          position: relative;
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
          <div class="header-indicator header-indicator--doneness"></div>
          <p class="header-questions font-weight--bold">[[questionsLeft]] questions left</p>
        </div>
      </div>
      <iron-pages selected=[[examPage]] attr-for-selected="page">
        <template is="dom-repeat" items=[[questions]]>
          <div page$=[[item]] class="question-container">
            <h2 class="question-title h2 font-weight--med">Questions [[item]]</h2>
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
        </template>
      </iron-pages>
    `;
  }
  static get properties(){
    return {
      answersList: {
        type: Array,
        value: ['You ask what’s going on around you', 'You’re totally aware of what\’s going on around you', 'You have no idea what\’s going on around you', 'You’re often aware of what\’s going on around you']
      },
      questions: {
        type: Array,
        value: [1,2,3,4,5]
      },
      examPage: {
        type: Number, 
        value: 1
      },
      questionsLeft: {
        type: Number,
        value: 29
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
    (this.examPage === 5)?
      this.set('route.path', '/applicationList/exam-done'):
      this.set('examPage', this.examPage+1);
    
    this.shadowRoot.querySelector('.header-indicator--doneness').style.width = `calc(1px + 100% / 5 * ${this.examPage-1})`;
    this.set('questionsLeft', 30 - (this.examPage*5));

    // this.set('route.path', '/applicationList/exam-done');
  }
}
window.customElements.define('rh-application-list-exam', RhApplicationListExam);