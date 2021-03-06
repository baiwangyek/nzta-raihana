import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhApplicationListExamReady extends PolymerElement {
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
          <p class="header-questions font-weight--bold">30 questions left</p>
        </div>
      </div>
      <div style="    width: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 80px;" class="success-container">
        <h3 style="margin-bottom: 20px;" class="font-weight--med h3">Are you ready?</h3>
        <p style="margin: 5px 0;">You have 60 minutes to complete 30 questions.</p>
        <p style="margin: 5px 0;">Score 33/35 to pass</p>
        <div style="margin-top: 40px;">
          <a style="display: inline-block; margin-right: 20px;" href="/applicationList/exam"><rh-button label="Next"></rh-button></a>
          <rh-button ghost label="Back" on-click="goToBack"></rh-button>
        </div>

      </div>
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

  goToBack() {
    window.location.back();
  }
}
window.customElements.define('rh-application-list-exam-ready', RhApplicationListExamReady);