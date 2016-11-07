import angular from 'angular';

import NavigationModule from "./navigation/navigation.module";
import FooterModule from "./footer/footer.module";

const LayoutModule = angular.module('layout', [
  NavigationModule.name,
  FooterModule.name
]);

export default LayoutModule;