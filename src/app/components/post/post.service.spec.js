(function() {
  'use strict';

  describe('post.service.spec', function(){
    var $httpBackend;
    var $http;
    var postService;
    var mockData = [
      { "displayName": "Sam Soffes", 
        "timestamp": 1445441030000,
        "message": "How To Get Inspired: the Right Way - Designmodo <a href='http://bit.ly/1lE4uJc'>bit.ly/1lE4uJc</a> Good stuff from <span class='at-mention'>@designmodo</span>!",
        "imageUrl": "../assets/images/pic1.png",
        "profilePic": "avatar7",
        "replies": [
          { "displayName": "Jed Bridges", "timestamp": "1445443030000", "message": "Great way to start the week. Thanks for sharing" },
          { "displayName": "Ren Walker", "timestamp": "1445445030000", "message": "Feeling inspired now... thanks for the great article <span class='at-mention'>@designmodo!</span>" }
        ]
      },
      { "displayName": "Meg Robichaud", 
        "timestamp": 1444771738424, 
        "message": "My view this morning is simply beautiful",
        "profilePic": "avatar1",
        "replies": [],
        "imageUrl": "../assets/images/pic2.png"
      }
    ];

    beforeEach(module('simplysocial'));

    beforeEach(angular.mock.inject(function(_$httpBackend_, _postService_, _$http_){
      $httpBackend = _$httpBackend_;
      $http = _$http_;
      postService = _postService_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingRequest();
      // clean out the data to make sure we don't accidentally mix up the unit tests
      postService.posts.data = [];
    });

    it('should initialize the service correctly', inject(function() {
      expect(postService).toBeDefined();
    }));

    it('should get all posts', inject(function() {
      $httpBackend.whenGET('/assets/data/posts.json').respond(mockData);

      postService.getPosts().then(function (data) {
        expect(data).toEqual(mockData);
      });

      $httpBackend.flush();
    }));

    it('should successfully create a new post', inject(function() {
      var message = 'This is a fake message';
      postService.createPost(message);

      expect(postService.posts.data[0].message).toEqual(message);
    }));

    it('should successfully create a new post with the right timestamp', inject(function() {
      var message = 'This is a fake message';
      postService.createPost(message);

      // moment shows "a few seconds" for things that happened up to 45 seconds ago. This might become a flakey test in the future
      // and should be monitored as such
      expect(postService.posts.data[0].relativeTime).toEqual('a few seconds');
    }));

    it('should fail to create a new empty message', inject(function() {
      var message = '';
      var err = postService.createPost(message);
      expect(err).toBeTruthy();
      expect(postService.posts.data.length).toEqual(0);
    }));

    it('should create a reply to a message', inject(function() {
      // first create the parent message
      var parentMessage = 'this is the parent message';
      postService.createPost(parentMessage);
      // ensure it was pushed to the right spot
      expect(postService.posts.data[0].message).toEqual(parentMessage);
      
      // next add a reply to this one
      var replyMessage = 'this is the reply';
      postService.createReply(replyMessage, postService.posts.data[0]);
      // make sure the reply was added to the correct post and is in fact there
      expect(postService.posts.data[0].replies[0].message).toEqual(replyMessage);

    }));

  });
})();
