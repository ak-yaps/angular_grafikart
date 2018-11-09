myApp.factory('Post', ['$http', '$q', function ($http, $q) {
  let factory = {
    posts: false,

    getPosts: function () {
      let deferred = $q.defer();
      if (factory.posts !== false) {
        deferred.resolve(factory.posts);
      } else {
        $http.get('posts.json')
          .then(function (res) {
            factory.posts = res.data;
            deferred.resolve(factory.posts);
          }, function (res) {
            deferred.reject('404 not found');
          })
      }
      return deferred.promise
    },

    getPost: function (id) {
      let deferred = $q.defer();
      let post = {};
      let posts = factory.getPosts().then(function(posts ){
        angular.forEach(posts, function (value, key) {
          if (value.id == id) {
            post = value;
          }
      });
        deferred.resolve(post);
      }, function(msg){
          deferred.reject(msg);
      })
      return deferred.promise;
    },
  }
  return factory;
}])