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
        lastName: "Moldovan",
        password: "some-hashed-value",
        email: "andrew@andrewmoldovan.com",
        notificationSettings: [
          { text: "Email me when my posts are marked as favorites", value: true },
          { text: "Email me when I'm mentioned", value: true },
          { text: "Email me when I get a reply", value: true },
          { text: "Email me when someone follows me", value: true }
        ],
        privacySettings: [
          {
            grouping: "tags",
            selected: 'anyone',
            values: [
              { text: "allow anyone to tag me", value: 'anyone' },
              { text: "only allow people I follow to tag me", value: 'follow' },
              { text: "don't allow anyone to tag me", value: 'noone' },
            ]
          },
          {
            grouping: "location",
            selected: 'add',
            values: [
              { text: "add a location to my posts", value: 'add' }
            ]
          },
          {
            grouping: "email",
            selected: 'find',
            values: [
              { text: "let others find me by my email address", value: 'find' }
            ]
          },
          {
            grouping: "ads",
            selected: 'tailor',
            values: [
              { text: "tailor ads based on my information", value: 'tailor' }
            ]
          }
          
        ]
      }
    }

    getLoggedInUser() {
      return this.loggedInUser;
    }
  }
}
