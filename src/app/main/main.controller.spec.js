(function() {
  'use strict';

  describe('main.controller.spec', function(){
    var $filter;
    var mockDataAll = [
      { 
        "displayName": "Sam Soffes", 
        "timestamp": 1445441030000,
        "message": "How To Get Inspired: the Right Way - Designmodo <a href='http://bit.ly/1lE4uJc'>bit.ly/1lE4uJc</a> Good stuff from <span class='at-mention'>@designmodo</span>!"
      },
      { 
        "displayName": "Meg Robichaud", 
        "timestamp": 1444771738424, 
        "message": "My view this morning is simply beautiful",
        "imageUrl": "../assets/images/pic2.png"
      }
    ];
    var mockDataImages = [
      { 
        "displayName": "Meg Robichaud", 
        "timestamp": 1444771738424, 
        "message": "My view this morning is simply beautiful",
        "imageUrl": "../assets/images/pic2.png"
      }
    ]

    beforeEach(module('simplysocial'));

    beforeEach(angular.mock.inject(function(_$filter_){
      $filter = _$filter_;
    }));

    it('filter to show all posts', function () {
      var result = $filter('filterPosts')(mockDataAll, 0);
      expect(result).toEqual(mockDataAll);
    });

    it('filter to show only posts with images', function () {
      var result = $filter('filterPosts')(mockDataAll, 1);
      expect(result).toEqual(mockDataImages)
    });
  });
})();
