import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
export default class RhButton extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .button {
          background: black;
          color: white;
          font-size: 14px;
          border: none;
          padding: 12px 50px;
          border-radius: 50px;
          cursor: pointer;
          border: 3px solid black;
          transition: 0.4s;
          @apply --custom-button-styles;
        }

        .button--ghost {
          background: transparent;
          color: black;
          border: 3px solid black;
        }

        .button--ghost:hover {
          background: black;
          color: white;
        }
      </style>
      <button class="button font-weight--bold">[[label]]</button>
    `;
  }
  static get properties(){
    return {
      label: String,
      ghost: {
        type: Boolean,
        value: false
      }
    }
  }
  static get observers() {
    return [
      '_renderGhost(ghost)'
    ]
  }
  connectedCallback() {
    super.connectedCallback();
  }

  _renderGhost(ghost) {
    (ghost)?
      this.shadowRoot.querySelector('button').classList.add('button--ghost'):
      this.shadowRoot.querySelector('button').classList.remove('button--ghost')
  }
}
window.customElements.define('rh-button', RhButton);