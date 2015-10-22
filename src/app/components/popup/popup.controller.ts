module simplysocial {
  'use strict';

  /** @ngInject */
  export class PopUpController {
    public message: string;

    constructor(private postService: PostService) {}

    public createPost() {
      this.postService.createPost(this.message);
      this.message = "";
    }

  }
}
