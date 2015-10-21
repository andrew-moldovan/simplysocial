module simplysocial {
  'use strict';

  /** @ngInject */
  export function tile(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        data: "="
      },
      templateUrl: 'app/components/tile/tile.html',
      controller: TileController,
      controllerAs: 'tile',
      bindToController: true
    };

  }

  /** @ngInject */
  class TileController {
    public data: any;

    constructor() {
      console.log(this.data);
    }
  }
}
