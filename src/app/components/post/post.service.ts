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
      // I implemented an http call and using a json file instead of just storing the data in the client as an example of how
      // it would be done if there was a real service call to be making
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
        return true;
      }
      this.posts.data.unshift(this.createPostObj(message));
    }

    createReply(message: string, parentPost: any) {
      if (!message || message == '') {
        return true;
      }
      parentPost.replies.push(this.createPostObj(message));
    }

    private createPostObj(message: string) {
      return {
        displayName: this.userService.getLoggedInUser().displayName,
        timestamp: Date.now(),
        message: message,
        profilePic: 'profile_pic',
        replies: [],
        relativeTime: moment(new Date(Date.now())).fromNow(true)
      };
    }
  }
}
