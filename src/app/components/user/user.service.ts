module simplysocial {
  'use strict';

  export class UserService {
    private loggedInUser: any;
    private $log: ng.ILogService;
    
    /** @ngInject */
    constructor($log: ng.ILogService) {
      this.$log = $log;
      this.loggedInUser = {
        displayName: "Andrew Moldovan",
        firstName: "Andrew",
        lastName: "Moldovan"
      }
    }

    getLoggedInUser() {
      return this.loggedInUser;
    }
  }
}
