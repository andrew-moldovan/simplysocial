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
    public error: string;

    constructor(private postService: PostService) {}

    public createPost() {
      this.error = this.postService.createPost(this.message);
      if (!this.error || this.error !== '') {
        console.log('Please enter some text for the post');
      }
      this.message = "";
    }

    public handleKeyDown($event) {
      if ($event.keyCode === 13) {
        this.createPost();
      }
    }

  }
}
