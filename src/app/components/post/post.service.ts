module simplysocial {
  'use strict';

  export class PostService {
    private posts: any[] = [];
    private $log: ng.ILogService;
    
    /** @ngInject */
    constructor($log: ng.ILogService) {
      this.$log = $log;
      this.posts = [
        { displayName: "Sam Soffes", 
          timestamp: "3m", 
          message: "How To Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
          links: [{start: 48, end: 65}],
          atMentions: [{start: 79, end: 91}],
          hashtags: []
        },
        { displayName: "Meg Robichaud", 
          timestamp: "25m", 
          message: "My view this morning is simply beautiful",
          links: [{ start: 0, end: 3 }, { start: 6, end: 9 }],
          atMentions: [],
          hashtags: []
        }
      ];
    }

    getPosts() {
      return this.posts;
    }
  }
}
