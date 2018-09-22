/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
import RhButton from './elements/rh-button.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class RhApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        .header {
          padding: 20px;
          position: fixed;
          top: 0;
          left: 0;
        }

        .raihana {
          font-weight: 600;
          color: black;
          font-family: 'Montserrat Alternates', sans-serif;
          text-decoration: none;
          font-size: 18px;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <app-route route="{{subroute}}" pattern="[[rootPath]]:subPage" data="{{subrouteData}}"></app-route>

      <div class="header">
        <a class="raihana" href="/applicationList">Raihana</a>
      </div>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <rh-landing name="landing"></rh-landing>
        <rh-application-list name="applicationList"></rh-application-list>
        <rh-exam name="exam"></rh-exam>
        <rh-eye-test name="eyeTest"></rh-eye-test>
        <rh-application-list-identity name="identity"></rh-application-list-identity>
        <rh-application-list-medical name="medical"></rh-application-list-medical>
        <rh-application-list-personal name="personal"></rh-application-list-personal>

        <rh-exam name="exam"></rh-exam>
      </iron-pages>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      showGoHome: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(route.path, routeData.page ,subrouteData.subPage)',
    ];
  }

  _routePageChanged(route) {
    var page = this.route.path.split('/')[1];
    var subPage = this.route.path.split('/')[2];
    // console.log('page', page);
    // console.log('subpage', subPage);
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    this.set('showGoHome', false);

    if (!page) {
      this.page = 'landing';
    } else if (['landing', 'applicationList', 'exam', 'eyeTest'].indexOf(page) !== -1) {
      this.page = page;
    }  
    else if(page==='applicationList') {
      if(subPage){
        this.page = subPage;
        this.set('showGoHome', true);
      }
      else {
        this.page = page
      }
    }
    else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'landing':
        import('./pages/rh-landing.js');
        break;
      case 'applicationList':
        import('./pages/rh-applicationList.js');
        break;
        case 'exam':
        import('./pages/rh-exam.js');
      case 'eyeTest':
        import('./pages/rh-eyeTest.js');
      case 'identity':
        import('./pages/rh-application-list-identity.js');
        break;
      case 'medical':
        import('./pages/rh-application-list-medical.js');
        break;
      case 'personal':
        import('./pages/rh-application-list-personal.js');
        case 'exam':
        import('./pages/rh-exam.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }

  goHome() {
    this.set('route.path', '/applicationList');
  }
}

window.customElements.define('rh-app', RhApp);
