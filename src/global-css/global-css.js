import { html } from '@polymer/polymer/polymer-element.js';
import { resetStyles } from './reset-styles.js';
import { typographyStyles } from './typography-styles';
import { elementsStyles } from './elements-styles';

import { colorStyles } from './color.js';

export const globalCSS = html`
  ${resetStyles}
  ${typographyStyles}
  ${elementsStyles}
  ${colorStyles}
`
