import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';

import '@polymer/app-route/app-location.js';

import RhTwoColLayout from '../layout/rh-two-col-layout.js';
import RhLayout from '../layout/rh-layout.js';
import RhButton from '../elements/rh-button.js';
import RhInput from '../elements/rh-input.js';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js'


let videoWidth, videoHeight;

let vga = {width: {exact: 1280}, height: {exact: 720}};

let resolution = vga;

// whether streaming video from the camera.
let streaming = false;

let video = null;
let canvasOutput = null;
let canvasOutputCtx = null;
let stream = null;

let detectFace = null;

let info = null;


let faceClassifier = null;
let eyeClassifier = null;

let src = null;
let dstC1 = null;
let dstC3 = null;
let dstC4 = null;

let canvasInput = null;
let canvasInputCtx = null;

let canvasBuffer = null;
let canvasBufferCtx = null;

let srcMat;
let grayMat;
let intervalId;

export default class RhEyeTest extends PolymerElement {
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

        .application-list-title {
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
        .hidden {
          height: 0%;
          width: 0%;
        }


        .CTA-container {
          margin-top: 60px;
        }

        .CTA-container > rh-button {
          display: inline-block; 
          margin-right: 40px;
        }

        .CTA-container > rh-button:last-of-type {
          margin-right: 0;
        }

        progress {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 10px;
          background: #861b1b;
        }

        progress::-webkit-progress-value {
          background: #861b1b;
        }

        .eye-test__desc p {
          margin: 10px 0;
        }
        .eye-test__desc #container {
          margin: 40px 0;
        }

        .eye-test__uber-black{
          background: black;
          color: white;
          height: 100vh;
          padding: 20px;
          display: flex;
          flex-direction:column;
        }
        .eye-test__mode {
         font-size: 30px;
        }
        .eye-test__full-middle{
          flex-grow: 1;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        .eye-test__exam {
          display: flex;
          height: 100%;
        }
        .eye-test__table {
          width: 100%;
          height: 100%;
        }
        .eye-test__table td {
          text-align: center;
          vertical-align: middle;
        }
        .eye-test__character-1 {
          font-size: 56px;
          transform: rotate(270deg) translateX(0px) translateY(0);
          font-family: sans-serif;
        }
        .eye-test__character-2 {
          font-size: 56px;
          transform: rotate(0deg);
          font-family: sans-serif;
        }
        .eye-test__character-3 {
          font-size: 56px;
          transform: rotate(90deg) translateX(0px) translateY(5px);
          font-family: sans-serif;
        }
        .eye-test__character-4 {
          font-size: 56px;
          transform: rotate(180deg) translateX(0px) translateY(0);
          font-family: sans-serif;          
        }
        .eye-test__positionmeter {
          margin: 20px 0;
        }


      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <rh-two-col-layout>
        <div slot="content-one" class="eye-test__desc">

          <h2 class="h3 font-weight--med application-list-title sub-title-spacing">Eye Check</h2>
          <p>Let's test your eyes</p>
          <p>&nbsp;</p>
          <p>&nbsp;·&nbsp;Enable your webcam and microphone</p>
          <p>&nbsp;·&nbsp;Stay about two meteres away</p>
          <p>&nbsp;·&nbsp;Yell out which direction the E is facing</p>

          <div id="info" class="text-center">
            Eye Check is loading...
          </div>
          <div id="container">
            <canvas class="center-block" id="canvasOutput" width=1280 height=720 style="width: 380px;"></canvas>
          </div>
          <canvas id="canvasInput" style="display: none"></canvas>
          <canvas id="canvasBuffer" style="display: none"></canvas>
          <div class="invisible">
            <video id="video" class="hidden">Your browser does not support the video tag.</video>
          </div>


          <rh-button data-id="123" data-step$=[[item.step]] label="Next" on-click="checkEyeTestCharacter"></rh-button>
        </div>

        <div slot="content-two">
          <div class="eye-test__uber-black">

            <template is="dom-if" if="{{_isEqualTo(mode, 'failed')}}">
             <h1>You failed</h1>
            </template>

            <template is="dom-if" if="{{_isEqualTo(mode, 'sitting')}}">

              <progress max="5" value="[[badFramaesForLast3Seconds]]"></progress>
              <div class="eye-test__positionmeter">Positionmeter</div>
              <div class="eye-test__exam">
                <table class="eye-test__table">
                  <tr>
                    <td></td>
                    <td class="h1">1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="h1">4</td>
                    <td><div class$="[[eCharacterClass]]">E</div></td>
                    <td class="h1">2</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="h1">3</td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </template>

            <template is="dom-if" if="{{_isEqualTo(mode, 'setup')}}">
              <b class="h1 font-weight--bold eye-test__mode">Setup</b>
              <b class="h2 font-weight--bold eye-test__full-middle">[[instructions]]</b>
            </template>

          </div>
        </div>

      </rh-two-col-layout>
    `;
  }

  _isEqualTo(title, string) {
    return title == string;
  }

  static get properties(){
    return {
      instructions: {
        type: String,
        value: '',        
      },
      mode: { // [setup, sitting]
        type: String,
        // value: 'setup',
        value: 'sitting',
      },
      successfulAttempts: {
        type: Number,
        value: 0,
      },
      badFramaesForLast3Seconds: {
        type: Number,
        value: 0,
      },
      eCharacterClass: {
        type: String,
        value: "eye-test__character-" + (Math.floor(Math.random() * 4) + 1),
      }
    }
  }

  static get observers() {
    return [
    ]
  }


  startCamera() {
    video = this.shadowRoot.getElementById('video');
    canvasOutput = this.shadowRoot.getElementById('canvasOutput');
    canvasOutputCtx = canvasOutput.getContext('2d');
    detectFace = this.shadowRoot.getElementById('face');
    info = this.shadowRoot.getElementById('info');

    if (streaming) return;
    navigator.mediaDevices.getUserMedia({video: resolution, audio: false})
      .then(function(s) {
      stream = s;
      video.srcObject = s;
      video.play();
    })
      .catch(function(err) {
      console.log("An error occured! " + err);
    });

    video.addEventListener("canplay", (ev)=>{
      if (!streaming) {
        videoWidth = video.videoWidth;
        videoHeight = video.videoHeight;
        video.setAttribute("width", videoWidth);
        video.setAttribute("height", videoHeight);
        canvasOutput.width = videoWidth;
        canvasOutput.height = videoHeight;
        streaming = true;
      }
      this.startVideoProcessing();
    }, false);
  }

  startVideoProcessing() {
    if (!streaming) { console.warn("Please startup your webcam"); return; }
    this.stopVideoProcessing();
    canvasInput = this.shadowRoot.querySelector('#canvasInput');
    canvasInput.width = videoWidth;
    canvasInput.height = videoHeight;
    canvasInputCtx = canvasInput.getContext('2d');
    
    canvasBuffer = this.shadowRoot.querySelector('#canvasBuffer');
    canvasBuffer.width = videoWidth;
    canvasBuffer.height = videoHeight;
    canvasBufferCtx = canvasBuffer.getContext('2d');
    
    srcMat = new cv.Mat(videoHeight, videoWidth, cv.CV_8UC4);
    grayMat = new cv.Mat(videoHeight, videoWidth, cv.CV_8UC1);
    
    faceClassifier = new cv.CascadeClassifier();
    faceClassifier.load('haarcascade_frontalface_default.xml');
    
    intervalId = setInterval(() => {
      if (this.mode == 'setup') {
        if (this.badFramaesForLast3Seconds < 5) {
          this.set('mode', 'sitting');
          this.set('badFramaesForLast3Seconds', 0);
        } else {      
          this.set('badFramaesForLast3Seconds', 0);
        }
      } else if (this.mode == 'sitting') {
        if (this.badFramaesForLast3Seconds > 99999999999999) {
        // if (this.badFramaesForLast3Seconds > 5) {
          this.set('mode', 'setup');
          this.set('badFramaesForLast3Seconds', 0);
        } else {      
          this.set('badFramaesForLast3Seconds', 0);
        }
      }
    }, 3000);

    requestAnimationFrame(() => this.processVideo());
  }

  processVideo() {
    canvasInputCtx.drawImage(video, 0, 0, videoWidth, videoHeight);
    let imageData = canvasInputCtx.getImageData(0, 0, videoWidth, videoHeight);
    srcMat.data.set(imageData.data);
    cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY);
    let faces = [];
    let size;

    let faceVect = new cv.RectVector();
    let faceMat = new cv.Mat();

    cv.pyrDown(grayMat, faceMat);
    if (videoWidth > 320)
      cv.pyrDown(faceMat, faceMat);
    size = faceMat.size();
    
    faceClassifier.detectMultiScale(faceMat, faceVect);
    for (let i = 0; i < faceVect.size(); i++) {
      let face = faceVect.get(i);
      faces.push(new cv.Rect(face.x, face.y, face.width, face.height));
    }
    faceMat.delete();
    faceVect.delete();

    canvasOutputCtx.drawImage(canvasInput, 0, 0, videoWidth, videoHeight);
    this.drawResults(canvasOutputCtx, faces, 'red', size);

    if (!faces.length) {
      this.set('instructions', 'No one in frame');
      this.set('badFramaesForLast3Seconds', this.badFramaesForLast3Seconds + 1);
    } else if (faces.length == 1) {
      let rect = faces[0];
      if (rect.height <= 24)  {
        this.set('instructions', 'You are too far away'); 
        this.set('badFramaesForLast3Seconds', this.badFramaesForLast3Seconds + 1);
      } else if (rect.height >= 29) {
        this.set('instructions', 'You are too close'); 
        this.set('badFramaesForLast3Seconds', this.badFramaesForLast3Seconds + 1);
      } else {
        this.set('instructions', 'You are OK');
      }
    } else {
      this.set('instructions', 'Too many people in frame');
      this.set('badFramaesForLast3Seconds', this.badFramaesForLast3Seconds + 1);
    }

    requestAnimationFrame(() => this.processVideo());
  }

  drawResults(ctx, results, color, size) {
    for (let i = 0; i < results.length; ++i) {
      let rect = results[i];
      let xRatio = videoWidth/size.width;
      let yRatio = videoHeight/size.height;
      ctx.lineWidth = 3;
      ctx.strokeStyle = color;
      ctx.strokeRect(rect.x*xRatio, rect.y*yRatio, rect.width*xRatio, rect.height*yRatio);
    }
  }

  stopVideoProcessing() {
    if (src != null && !src.isDeleted()) src.delete();
    if (dstC1 != null && !dstC1.isDeleted()) dstC1.delete();
    if (dstC3 != null && !dstC3.isDeleted()) dstC3.delete();
    if (dstC4 != null && !dstC4.isDeleted()) dstC4.delete();
  }

  stopCamera() {
    if (!streaming) return;
    this.stopVideoProcessing();
    this.shadowRoot.getElementById("canvasOutput").getContext("2d").clearRect(0, 0, videoWidth, videoHeight);
    video.pause();
    video.srcObject=null;
    stream.getVideoTracks()[0].stop();
    streaming = false;
  }

  initUI() {
  }

  opencvIsReady() {
    console.log('OpenCV.js is ready');
    if (!featuresReady) {
      console.log('Requred features are not ready.');
      return;
    }
  }

  connectedCallback() {
    super.connectedCallback(); 
    const contEl = this.shadowRoot.querySelector('#container');
    console.log('contEl',contEl)

    afterNextRender(this, () => {
      this.initUI();
      this.startCamera();
      info.innerHTML = '';
    })

  }

  disconnectedCallback() {
    clearInterval(intervalId);
  }

  goToApplicationStep(e) {
    var applicationStep = e.currentTarget.dataset.step;
    console.log(applicationStep);
  }

  checkEyeTestCharacter(e) {
    const character = this.shadowRoot.querySelector("#eye-test-character").getValue();
    console.log('character',character);
  }

}
window.customElements.define('rh-eye-test', RhEyeTest);