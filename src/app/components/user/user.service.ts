module simplysocial {
  'use strict';

  export class UserService {
    private loggedInUser: any;
    private $log: ng.ILogService;
    
    /** @ngInject */
    constructor($log: ng.ILogService) {
      this.$log = $log;
      // All of this should be coming from the server
      this.loggedInUser = {
        displayName: "Andrew Moldovan",
        firstName: "Andrew",
        lastName: "Moldovan",
        password: "some-hashed-value",
        email: "andrew@andrewmoldovan.com",
        notificationSettings: [
          { id: "favorite", text: "Email me when my posts are marked as favorites", value: true },
          { id: "mentioned", text: "Email me when I'm mentioned", value: true },
          { id: "reply", text: "Email me when I get a reply", value: true },
          { id: "follow", text: "Email me when someone follows me", value: true }
        ],
        privacySettings: [
          {
            grouping: "TAGS",
            selected: 'anyone',
            values: [
              { text: "allow anyone to tag me", value: 'anyone' },
              { text: "only allow people I follow to tag me", value: 'follow' },
              { text: "don't allow anyone to tag me", value: 'noone' },
            ]
          },
          {
            grouping: "LOCATION",
            selected: 'add',
            values: [
              { text: "add a location to my posts", value: 'add' },
              { text: "Don't add a location to my posts", value: 'noadd' }
            ]
          },
          {
            grouping: "EMAIL",
            selected: 'find',
            values: [
              { text: "let others find me by my email address", value: 'find' },
              { text: "don't let others find me by my email address", value: 'donotfind' }
            ]
          },
          {
            grouping: "ADS",
            selected: 'tailor',
            values: [
              { text: "tailor ads based on my information", value: 'tailor' },
              { text: "don't tailor ads based on my information", value: 'notailor' }
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
