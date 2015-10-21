module simplysocial {
  'use strict';

  export class PostService {
    private posts: any[] = [];
    
    /** @ngInject */
    constructor(private $log: ng.ILogService, private userService: UserService) {
      this.posts = [
        { displayName: "Sam Soffes", 
          timestamp: 1445441030000,
          message: "How To Get Inspired: the Right Way - Designmodo <a href='http://bit.ly/1lE4uJc'>bit.ly/1lE4uJc</a> Good stuff from <span class='at-mention'>@designmodo!</span>"
        },
        { displayName: "Meg Robichaud", 
          timestamp: 1444771738424, 
          message: "My view this morning is simply beautiful",
        }
      ];
    }

    getPosts() {
      return this.posts;
    }

    createPost(message: string) {
      var newPost = {
        displayName: this.userService.getLoggedInUser().displayName,
        timestamp: Date.now(),
        message: message
      }
      this.posts.unshift(newPost);
    }
  }
}
