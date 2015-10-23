module simplysocial {
  'use strict';

  /** @ngInject */
  export function simplySocialNavbar(): ng.IDirective {

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
    public showDropdown: boolean = false;
    
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
