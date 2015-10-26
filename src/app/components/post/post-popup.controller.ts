module simplysocial {
  'use strict';

  /** @ngInject */
  export class PostPopUpController {
    public data;

    constructor(private postService: PostService, private $scope: any) {
      this.data = $scope.ngDialogData;
    }

  }
}
