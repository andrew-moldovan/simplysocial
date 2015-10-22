module simplysocial {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('settings', {
          url: '/settings',
          templateUrl: 'app/components/settings/settings.html',
          controller: 'SettingsController',
          controllerAs: 'settings'
        });

      $urlRouterProvider.otherwise('/');
    }

  }
}
