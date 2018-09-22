import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/app-route/app-location.js';
import '@polymer/paper-slider/paper-slider.js';


import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';


export default class RhExam extends PolymerElement {
    static get template() {
        return html`
      ${globalCSS}
      <style>
      .header{
        background-color: #cecece;
        height:70px;
     
           
        }

        .timer{
            float:left 
        }

        .slider{
            font-size: 15px;
            margin-left : 20px;
            margin-top:5px;
            float:left;

        }

        .square{ 
            height: 20px;
            width: 700px;
            background-color: white;
            border: 1px solid black;
        }

           
        
        .image{
            width:100%;
            border-radius: 10%;
        }
       
        

        .square1{ 
           
           
         
           
            font-size:30px;
        }
        label{
            size:50px;
        }
       
      }
    
      </style>
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class = 'header h2 font-weight--bold '>
      <div class ='timer'>49:50 remaining</div>
      <div class ='slider'>
        <div class = 'square font-weight--bold'></div>
        <br>
        <div>12 questions left</div>
      </div>
      </div>

      <rh-layout>
        <div slot="content">
          <h2 class="h2 font-weight--bold application-list-title title-spacing">Question 1</h2>
          
              <p class="p">Does the driver of the blue car have to give way?</p>
              <br>
              <image src="https://www.drivingtests.co.nz/media/question-images/q194b.jpg" class = "image"></image>
              <br>
              <br>
              
              <label class="square1">
              <input type="checkbox" checked="checked">
              Yes
              </label>
              <br>
              <br>
              <label class ="square1">
              <input type="checkbox">
              No
              </label>
          
        </div>
      </rh-layout>

    `;
    }
    static get properties() {
        return {
            applicationList: {
                type: Array,
                value: [
                    { label: 'Prove your identity', step: 'identity' },
                    { label: 'Personal details', step: 'personal' },
                    { label: 'Health checkup', step: 'health' },
                    { label: 'Start the exam', step: 'exam' }
                ]
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

    goToApplicationStep(e) {
        var applicationStep = e.currentTarget.dataset.step;
        console.log(applicationStep);
    }
}
window.customElements.define('rh-exam', RhExam);