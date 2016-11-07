import angular from 'angular';

import DashboardModuleView from './dashboard-view/dashboard-view.module';
import OtherViewModule from './other-view/other-view.module';
import SharedModule from './shared/shared.module';

const ComponentsModule = angular.module('components', [
  DashboardModuleView.name,
  OtherViewModule.name,
  SharedModule.name
]);

export default ComponentsModule;
