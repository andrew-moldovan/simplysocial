module simplysocial {
  'use strict';

  export class SettingsController {
    public user: any;

    /* @ngInject */
    constructor(private userService: UserService) {
      this.user = userService.getLoggedInUser();
    }

    public saveSettings() {
      // Make the necessary $http call to save the settings
      console.log(this.user);
    }
  }

}