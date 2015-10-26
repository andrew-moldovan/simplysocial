module simplysocial {
  'use strict';

  /** @ngInject */
  export function post(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        data: "=",
        grid: "="
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
    public grid: boolean;
    public isExpanded: boolean = false;
    public replyMessage: string = "";

    constructor(private moment: moment.MomentStatic, private postService: PostService, private ngDialog) {
      this.data.relativeTime = moment(new Date(this.data.timestamp)).fromNow(true);

      if (this.data.replies) {
        for (var i = 0; i < this.data.replies.length; i++) {
          this.data.replies[i].relativeTime = moment(new Date(this.data.replies[i].timestamp)).fromNow(true);
        }
      }
        
    }

    public handleReplyKeyPress($event) {
      if ($event.keyCode === 13) {
        this.reply();
      }
    }

    public expandCollapse() {
      this.isExpanded = !this.isExpanded;
    }

    public reply() {
      this.postService.createReply(this.replyMessage, this.data);
      this.replyMessage = "";
    }

    public openImage() {
      this.ngDialog.open({
        template: 'app/components/post/post-popup.html',
        controller: PostPopUpController,
        controllerAs: 'pp',
        data: this.data
      });
    }
  }
}
