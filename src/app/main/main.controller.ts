module simplysocial {
  'use strict';

  export class MainController {
    public posts: any[] = [];
    public filter: number = 0;

    /* @ngInject */
    constructor(private postService: PostService) {
      this.posts = postService.getPosts();
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