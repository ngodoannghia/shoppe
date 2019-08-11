(function () {
    var app = angular.module('myapporder', ['ui.router']);


    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('detail', {
                url: '/',
                templateUrl: '/html/detailproduct.html',
                controller: 'detailcontroller'
            })
            .state('hoidap', {
                url: '/hoidap',
                templateUrl: '/html/hoidap.html',
                controller: 'hoidapcontroller'
            })
            .state('danhgia', {
                url: '/danhgia',
                templateUrl: '/html/danhgia.html',
                controller: 'danhgiacontroller'
            });
    }]);

   
    

    app.controller("myctrorder", ['$scope', '$timeout', '$interval', '$http', function ($scope, $timeout, $interval, $http) {
        var index = 0;
        $scope.images = ['laptop1.jpg', 'laptop2.png', 'laptop3.jpg','laptop4.jpg'];
        $scope.image = $scope.images[index];
        index += 1;
        $scope.data = {};
        $scope.slide = function (n) {
            console.log(n);
            $scope.image = $scope.images[n];
        };
        $scope.slidetimeout = function () {
            $timeout(slide, 2000);
        };
        $scope.slideshow = function () {
            if (index < $scope.images.length - 1) {
                $scope.image = $scope.images[index];
                index += 1;
            }
            else {
                $scope.image = $scope.images[index];
                index = 0;
            }
        };
        $scope.getProductId = function () {
            $http.get('http://localhost:8080/products/1').then(function success(response) {
                $scope.data = response.data;
                dataglobal = response.data;
                console.log($scope.data);
            }, function error() {
                console.log("error");
            });
        };

        $scope.getProductId();
        $interval($scope.slideshow, 5000);
    }]);

    app.controller('detailcontroller', ['$scope', '$http', function ($scope, $http) {

        

    }]);
    app.controller('hoidapcontroller', ['$scope', function ($scope) {

    }]);
    app.controller('danhgiacontroller', ['$scope', function ($scope) {

    }]);

})();