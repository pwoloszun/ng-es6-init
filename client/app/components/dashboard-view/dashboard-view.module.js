import angular from 'angular';

import DashboardViewComponent from './dashboard-view.component';

const DashboardModuleView = angular.module('components.dashboard', [])
  .component('dashboardView', DashboardViewComponent);

export default DashboardModuleView;