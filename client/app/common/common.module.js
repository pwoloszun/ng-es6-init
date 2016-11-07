import angular from 'angular';

import ServicesModule from './services/services.module';

const CommonModule = angular.module('common', [
  ServicesModule.name
]);

export default CommonModule;
