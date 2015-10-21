module simplysocial {
  'use strict';

  export class MainController {
    public tiles: any[] = [];

    /* @ngInject */
    constructor () {
      this.tiles = [
        { "displayName": "Sam Soffes", "timestamp": "3m", "message": "How to get inspired" },
        { "displayName": "Meg Robichaud", "timestamp": "25m", "message": "My view this morning is simply beautiful" }
      ];
    }
  }
}
