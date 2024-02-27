angular.module('MyApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: function () {
                    return '/home';
                }
            })
            .when('/home', {
                templateUrl: '/Template/Profile.html',
                controller: 'HomeController'
            })
            .when('/Article', {
                templateUrl: '/Template/Article.html',
                controller: 'ArticleController'
            })
            .when('/Blog/:id', {
                templateUrl: '/Template/Blog.html',
                controller: 'BlogController'
            })
            .otherwise({
                templateUrl: '/Template/Error.html',
                controller: 'ErrorController'
            })

        $locationProvider.html5Mode(false).hashPrefix('!');
    })
    .controller('HomeController', function ($scope) {
        $scope.Message = "http://www.c-sharpcorner.com/members/satyaprakash-samantaray";
    })
    .controller('ArticleController', function ($scope) {
        $scope.Message = "http://www.c-sharpcorner.com/article/introduction-to-sql-operations-studio-and-make/";
    })
    .controller('BlogController', function ($scope, $routeParams) {
        $scope.Message = "http://www.c-sharpcorner.com/blogs/career-booster-through-c-sharp-corner" + "Of Id" + $routeParams.id;
    })
    .controller('ErrorController', function ($scope) {
        $scope.Message = "Page You Requested Not Found!";
    });
