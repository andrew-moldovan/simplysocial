module simplysocial {
  'use strict';

  /** @ngInject */
  export class PopUpController {
    public message: string;
    public error: boolean;
    public errorMessage: string;

    constructor(private postService: PostService, private $scope: any) {}

    public createPost($event) {
      this.error = this.postService.createPost(this.message);
      this.message = "";
      if (this.error) {
        this.errorMessage = "Please enter some text";
      } else {
        this.$scope.closeThisDialog();
      }
      this.error = false;
    }

  }
}
