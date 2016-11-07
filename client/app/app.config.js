const AppConfig = function ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true); // enable HTML5 routing

  $stateProvider.state('dashboard', {
    url: "/",
    template: "<dashboard-view></dashboard-view>"
  }).state('other', {
    url: "/other",
    template: "<other-view></other-view>"
  });

  $urlRouterProvider.otherwise('/');
};

export default AppConfig;
