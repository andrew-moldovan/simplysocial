module simplysocial {
  'use strict';

  /** @ngInject */
  export function postCreate(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/post/post.create.html',
      controller: PostCreateController,
      controllerAs: 'pc',
      bindToController: true
    };

  }

  /** @ngInject */
  class PostCreateController {
    public message: string;

    constructor(private postService: PostService) {}

    public createPost() {
      this.postService.createPost(this.message);
      this.message = "";
    }

  }
}
