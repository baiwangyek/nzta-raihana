import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhLayout extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .layout-container {
          max-width: 600px;
          width: 90%;
          height: 100vh;
          margin: 0 auto;
          padding-top: 90px;
        }

        .layout-container--narrow {
          max-width: 400px;
          width: 90%;
        }
      </style>
      <div class="layout-container">
        <slot name="content"></slot>
      </div>
    `;
  }
  static get properties(){
    return {
      narrow: {
        type: Boolean,
        value: false
      }
    }
  }
  static get observers() {
    return [
      '_renderNarrowLayout(narrow)'
    ]
  }
  connectedCallback() {
    super.connectedCallback();
  }

  _renderNarrowLayout(narrow) {
    (narrow)?
      this.shadowRoot.querySelector('.layout-container').classList.add('layout-container--narrow'):
      this.shadowRoot.querySelector('.layout-container').classList.remove('layout-container--narrow')
  }
}
window.customElements.define('rh-layout', RhLayout);