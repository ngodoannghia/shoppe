
(function () {
    var app = angular.module('myapp', []);
    app.controller('myctr', ['$scope', '$interval', '$http', function ($scope, $interval, $http) {

        var index = 0;
        $scope.images = ['/img/sendo1.png', '/img/sendo2.png', '/img/sendo3.png', '/img/sendo4.png'];
        $scope.products = [];
        $scope.product4 = [];
        $scope.productsalse = [];
        index += 1;
        $scope.sum = 7200000;
        $scope.slideshow = function () {
            if (index < $scope.images.length - 1) {
                $scope.image = $scope.images[index % $scope.images.length];
                $scope.product = $scope.products[index % $scope.products.length];
                index = index + 1;
            }
            else {
                $scope.image = $scope.images[index];
                $scope.product = $scope.products[index];
                index = 0;
            }
        };
        $scope.getListProduct = function () {
            $http.get("http://localhost:8080/products/list").then(function success(response) {
                $scope.products = response.data;

                for (var i = 0; i < 4; i++) {
                    $scope.product4[i] = $scope.products[i];
                }
                for (var j = 0; j < 6; j++) {
                    $scope.productsalse[j] = $scope.products[j];
                }
            }, function error() {
                console.log("errors");
            });
        };

        $scope.gio = 0;
        $scope.phut = 0;
        $scope.giay = 0;
        $scope.caculate = function () {
            var tem = 0;
            if ($scope.sum > 0) {
                $scope.gio = Math.floor($scope.sum / (60 * 60 * 1000));
                tem = $scope.sum % (60 * 60 * 1000);
                $scope.phut = Math.floor(tem / (60 * 1000));
                $scope.giay = tem % (60 * 1000) / 1000;
                $scope.sum = $scope.sum - 1000;
            }
            else {
                $scope.sum = 7200000;
            }
        };



        $interval(function () { $scope.caculate(); }, 1000);
        $scope.getListProduct();
        $interval(function () { $scope.slideshow(); }, 5000);
   

    }]);


})();
