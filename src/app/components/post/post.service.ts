module simplysocial {
  'use strict';

  export class PostService {
    public posts: any = {};
    
    /** @ngInject */
    constructor(private $log: ng.ILogService, private userService: UserService, private $http: ng.IHttpService) {
      this.posts.loading = true;
      this.posts.data = [];
      this.getPosts()
        .then((data: any) => {
          this.posts.data = data;
          this.posts.loading = false;
        });
    }

    getPosts() {
      return this.$http.get('/assets/data/posts.json')
        .then((response: any) => {
          return response.data;
        })
        .catch((error: any) => {
          console.error('Failed to fetch posts', error);
        });
    }

    createPost(message: string) {
      if (!message || message == '') {
        return "Please enter a valid message";
      }
      this.posts.data.unshift(this.createPostObj(message));
    }

    createReply(message: string, parentPost: any) {
      if (!message || message == '') {
        return "Please enter a valid message";
      }
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
