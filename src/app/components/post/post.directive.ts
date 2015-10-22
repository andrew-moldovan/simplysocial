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
    public isExpanded: boolean = false;
    public replyMessage: string = "";

    constructor(private moment: moment.MomentStatic, private postService: PostService) {
      console.log(this.data);
      this.data.relativeTime = moment(this.data.timestamp).fromNow();

      if (this.data.replies) {
        for (var i = 0; i < this.data.replies.length; i++) {
          this.data.replies[i].relativeTime = moment(this.data.replies[i].timestamp).fromNow();
        }
      }
        
    }

    public expandCollapse() {
      this.isExpanded = !this.isExpanded;
    }

    public reply() {
      this.postService.createReply(this.replyMessage, this.data);
    }
  }
}
