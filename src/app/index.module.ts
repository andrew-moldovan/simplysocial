/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/tile/tile.directive.ts" />

declare var moment: moment.MomentStatic;

module simplysocial {
  'use strict';

  angular.module('simplysocial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .controller('MainController', MainController)
    .directive('navbar', navbar)
    .directive('tile', tile);
}
