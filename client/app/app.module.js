import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LayoutModule from './layout/layout.module';
import CommonModule from './common/common.module';
import ComponentsModule from './components/components.module';

import AppConfig from './app.config';

import AppComponent from './app.component';

angular.module('myApp', [
  uiRouter,
  CommonModule.name,
  ComponentsModule.name,
  LayoutModule.name
])
  .config(AppConfig)
  .component('app', AppComponent);
