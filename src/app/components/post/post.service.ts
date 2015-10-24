module simplysocial {
  'use strict';

  export class PostService {
    private posts: any[] = [];
    
    /** @ngInject */
    constructor(private $log: ng.ILogService, private userService: UserService) {
      this.posts = [
        { displayName: "Sam Soffes", 
          timestamp: 1445441030000,
          message: "How To Get Inspired: the Right Way - Designmodo <a href='http://bit.ly/1lE4uJc'>bit.ly/1lE4uJc</a> Good stuff from <span class='at-mention'>@designmodo</span>!",
          imageUrl: '../assets/images/pic1.png',
          replies: [
            { displayName: "Jed Bridges", timestamp: 1445443030000, message: "Great way to start the week. Thanks for sharing" },
            { displayName: "Ren Walker", timestamp: 1445445030000, message: "Feeling inspired now... thanks for the great article <span class='at-mention'>@designmodo!</span>" },
          ]
        },
        { displayName: "Meg Robichaud", 
          timestamp: 1444771738424, 
          message: "My view this morning is simply beautiful",
          replies: [],
          imageUrl: '../assets/images/pic2.png'
        }
      ];
    }

    getPosts() {
      return this.posts;
    }

    createPost(message: string) {
      this.posts.unshift(this.createPostObj(message));
    }

    createReply(message: string, parentPost: any) {
      parentPost.replies.push(this.createPostObj(message));
    }

    private createPostObj(message: string) {
      return {
        displayName: this.userService.getLoggedInUser().displayName,
        timestamp: Date.now(),
        message: message,
        replies: [],
        relativeTime: moment(Date.now()).fromNow(true)
      };
    }
  }
}
