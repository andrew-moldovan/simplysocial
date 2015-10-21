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

    constructor() {
      console.log(this.data);
      if (this.data.links.length > 0) {
        this.handleLinks();
      }
    }

    private handleLinks() {
      for (var i = 0; i < this.data.links.length; i++) {
        var link = this.data.links[i];
        this.data.message = [this.data.message.slice(0, link.start), "<a>", this.data.message.slice(link.start)].join('');
        this.data.message = [this.data.message.slice(0, link.end), "</a>", this.data.message.slice(link.end)].join('');
      }
    }
  }
}
