module simplysocial {
  'use strict';

  /** @ngInject */
  export class PopUpController {
    public message: string;
    public error: string;

    constructor(private postService: PostService, private $scope: any) {}

    public createPost($event) {
      this.error = '';
      this.error = this.postService.createPost(this.message);
      this.message = "";
      if (!this.error || this.error === '') {
        this.$scope.closeThisDialog();
      }
    }

  }
}
