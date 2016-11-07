import angular from 'angular';

import OtherViewComponent from './other-view.component';

const OtherViewModule = angular.module('components.other', [])
  .component('otherView', OtherViewComponent);

export default OtherViewModule;