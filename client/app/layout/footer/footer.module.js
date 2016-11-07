import angular from 'angular';

import FooterComponent from "./footer.component";

const FooterModule = angular.module('layout.footer', [])
  .component('footer', FooterComponent);

export default FooterModule;