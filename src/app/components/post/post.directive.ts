module simplysocial {
  'use strict';

  /** @ngInject */
  export function post(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        data: "="
      },
      templateUrl: 'app/components/post/post.html',
      controller: PostController,
      controllerAs: 'post',
      bindToController: true
    };

  }

  /** @ngInject */
  class PostController {
    public data: any;

    constructor(moment: moment.MomentStatic) {
      console.log(this.data);
      this.data.relativeTime = moment(this.data.timestamp).fromNow();
    }

  }
}
