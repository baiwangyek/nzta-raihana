import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { globalCSS } from '../global-css/global-css';
import '@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';

export default class RhInput extends PolymerElement {
  static get template() {
    return html`
      ${globalCSS}
      <style>
        .input {
          font-size: 14px;
          width: 100%;
          border: none;
          border-bottom: 1px solid black;
          padding: 5px 0;
          background: none;
          @apply --custom-button-styles;
        }

        .input:focus {
          outline: none;
          background: white;
        }

        .label {
          font-size: 12px;
        }

        .styled-select {
          border-bottom: 1px solid black;
        }

        .styled-select select {
          background: transparent;
          border: none;
          font-size: 14px;
          height: 29px;
          width: 100%;
        }

        .textarea {
          border: none;
          box-shadow: 0 1px 0px 0px black;
          width: 100%;
          font-size: 14px;
        }
      </style>
      <div>
        <p style="padding-bottom: 5px;" class="label font-weight--bold">[[label]]</p>
        <iron-pages selected=[[inputType]] attr-for-selected="input-type">
          <div input-type="dropdown" class="styled-select black rounded">
            <select on-change="dropdownSelected">
              <option>Yes</option>
              <option selected>No</option>
            </select>
          </div>
          <iron-autogrow-textarea class="textarea" input-type="textarea"></iron-autogrow-textarea>
          <input input-type="default" type="[[type]]" placeholder=[[placeholder]] class="input"/>
        </iron-pages>
      </div>
    `;
  }
  static get properties(){
    return {
      label: String,
      description: String,
      type: String,
      placeholder: String
    }
  }
  static get observers() {
    return [
      '_renderInputType(type)'
    ]
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _renderInputType(type) {
    if(type === 'dropdown'){
      this.set('inputType', 'dropdown');
    }
    else if(type === 'textarea'){
      this.set('inputType', 'textarea');
    }
    else {
      this.set('inputType', 'default');
    }
  }

  dropdownSelected(e) {
    var selectedIndex = e.currentTarget.selectedIndex;
    
    this.dispatchEvent(new CustomEvent('dropdown-change', {detail:{selectedIndex: selectedIndex.toString()}}));
  }

  getValue() {
    return this.shadowRoot.querySelector("input").value;
  }
}
window.customElements.define('rh-input', RhInput);