myApp.controller('CommentsCtrl', ['$scope', 'Post', '$routeParams', function ($scope, Post, $routeParams) {
  Post.getPost($routeParams.id).then(function(post){
    $scope.title = post.name;
    $scope.comments = post.comments;

  }, function(msg){
        alert(msg)
  })

}])