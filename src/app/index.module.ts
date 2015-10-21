/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/post/post.directive.ts" />
/// <reference path="../app/components/post/post.service.ts" />

declare var moment: moment.MomentStatic;

module simplysocial {
  'use strict';

  angular.module('simplysocial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .controller('MainController', MainController)
	.service('postService', PostService)
    .directive('navbar', navbar)
    .directive('post', post);
}
