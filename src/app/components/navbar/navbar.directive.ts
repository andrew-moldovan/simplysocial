module simplysocial {
  'use strict';

  /** @ngInject */
  export function navbar(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class NavbarController {
    
    constructor(private ngDialog) {

    }

    public openCreateNewMessage() {
      this.ngDialog.open({ 
        template: 'app/components/popup/popup.html',
        controller: PopUpController,
        controllerAs: 'pu'
      });
    }
  }
}
