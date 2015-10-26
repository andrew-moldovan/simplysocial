module simplysocial {
  'use strict';

  /** @ngInject */
  export function postCreate(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        newItem: '&'
      },
      templateUrl: 'app/components/post/post.create.html',
      controller: PostCreateController,
      controllerAs: 'pc',
      bindToController: true
    };

  }

  /** @ngInject */
  class PostCreateController {
    public message: string;
    public error: boolean;
    public newItem: Function;

    constructor(private postService: PostService) {}

    public createPost() {
      this.error = this.postService.createPost(this.message);
      if (this.error) {
        console.log('Please enter some text for the post');
      }
      this.error = false;
      this.message = "";

      // notify the parent directive of the created post
      this.newItem()();
    }

    public handleKeyDown($event) {
      if ($event.keyCode === 13) {
        this.createPost();
      }
    }

  }
}
