const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'PostCtrl'
    })
    .when('/comments/:id', {
      templateUrl: 'partials/comments.html',
      controller: 'CommentsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}])