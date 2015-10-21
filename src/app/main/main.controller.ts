module simplysocial {
  'use strict';

  export class MainController {
    public posts: any[] = [];

    /* @ngInject */
    constructor (postService: PostService) {
      this.posts = postService.getPosts();
    }
  }
}
