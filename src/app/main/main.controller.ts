module simplysocial {
  'use strict';

  export class MainController {
    public posts;
    public filter: number = 0;
    public grid: boolean = false;
    public leftColumn: any[] = [];
    public middleColumn: any[] = [];
    public rightColumn: any[] = [];

    /* @ngInject */
    constructor(private postService: PostService) {
      this.posts = this.postService.posts;
    }

    public createGrid() {
      // if we haven't already created the arrays
      if (this.leftColumn.length == 0) {
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