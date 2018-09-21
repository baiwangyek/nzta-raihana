import { html } from '@polymer/polymer/polymer-element.js';
import { colorStyles } from './color.js';

export const globalCSS = html`
  <link rel="stylesheet" href="./src/global-css/reset.css">
  <link rel="stylesheet" href="./src/global-css/typography.css">
  <link rel="stylesheet" href="./src/global-css/elements.css">
  ${colorStyles}
`
