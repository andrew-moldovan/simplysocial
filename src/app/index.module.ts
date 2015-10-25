/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/settings/settings.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/post/post.directive.ts" />
/// <reference path="../app/components/post/post.create.directive.ts" />
/// <reference path="../app/components/post/post.service.ts" />
/// <reference path="../app/components/user/user.service.ts" />
/// <reference path="../app/components/popup/popup.controller.ts" />

declare var moment: moment.MomentStatic;

module simplysocial {
  'use strict';

  angular.module('simplysocial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngDialog', 'uiSwitch'])
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .controller('MainController', MainController)
    .controller('PopUpController', PopUpController)
    .controller('SettingsController', SettingsController)
	.service('postService', PostService)
    .service('userService', UserService)
    .directive('simplySocialNavbar', simplySocialNavbar)
    .directive('post', post)
    .directive('postCreate', postCreate)
    .filter('filterPosts', filterPosts);
}
