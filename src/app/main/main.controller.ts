module simplysocial {
  'use strict';

  export class MainController {
    public posts;
    public filter: number = 0;
    public grid: boolean = false;
    public leftColumn: any[] = [];
    public middleColumn: any[] = [];
    public rightColumn: any[] = [];
    public showGridOption: boolean = true;

    /* @ngInject */
    constructor(private postService: PostService, private $window, private $scope) {
      this.posts = this.postService.posts;

      if ($window.innerWidth < 900) {
        this.showGridOption = false;
      }

      angular.element($window).bind('resize', () => {
        if ($window.innerWidth < 900) {
          this.grid = false;
          $scope.$apply();
        }
      });
    }

    public newItem = () => {
      // get notified by the post-creater directive of a new item
      // the new item will be the at the front of the data list
      if (this.grid) {
        // recreate the grid
        this.createGrid(true);
      }
    }

    // the override flag overrides the check to see if we've already created the grid and will recreate it
    public createGrid(override: boolean) {
      // if we haven't already created the arrays
      if (this.leftColumn.length == 0 || override) {

        if (override) {
          this.leftColumn = [];
          this.middleColumn = [];
          this.rightColumn = [];
        }

        // let's create 3 different arrays for the 3 different columns
        for (var i = 0; i < this.posts.data.length; i++) {
          if (i % 3 == 0) {
            this.leftColumn.push(this.posts.data[i]);
          } else if (i % 3 == 1) {
            this.middleColumn.push(this.posts.data[i]);
          } else if (i % 3 == 2) {
            this.rightColumn.push(this.posts.data[i]);
          }
        }  
      }
      
      this.grid = true;
    }
  }

  export function filterPosts($filter) {
    return (arr, filterValue) => {
      if (filterValue === 0) {
        // all posts
        return arr;
      } else if (filterValue === 1) {
        // only photos
        return $filter('filter')(arr, { imageUrl: '' });
      } else if (filterValue === 2) {
        return $filter('filter')(arr, { imageUrl: '' });
      }
      
    }
  }

}