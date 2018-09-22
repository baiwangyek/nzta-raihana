import { html } from '@polymer/polymer/polymer-element.js';

export const typographyStyles = html`
  <style>
    /*
    FONT WEIGHT NUM
    400 - regular
    500 - medium
    700 - bold
    */

    * {
      font-family: 'Montserrat Alternates', sans-serif;
      /* keep fonts similar weight for different browsers */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .h1 {
      font-size: 56px;
    }

    .h2 {
      font-size: 32px;
    }

    .h3 {
      font-size: 24px;
    }

    .h4 {
      font-size: 20px;
    }

    .p {
      font-size: 16px;
    }

    .p--small {
      font-size: 14px;
    }

    .caption {
      font-size: 12px;
    }

    .font-weight--light {
      font-weight: 300;
    }

    .font-weight--reg {
      font-weight: 400
    }

    .font-weight--med {
      font-weight: 600
    }

    .font-weight--bold {
      font-weight: 700;
      /* font-family: 'ObjectivityBold', sans-serif;  */
    }

    .color--primary {
      color: var(--primary);
    }

    .color--alert {
      color: var(--alert);
    }

    .text-capitalize {
      text-transform: capitalize
    }
  </style>
`
