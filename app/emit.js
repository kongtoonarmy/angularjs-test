var app = angular.module('app', []);

 app.controller("firstCtrl", function ($scope) {
     $scope.$on('eventName', function (event, args) {
         $scope.message = args.message;
     });
 });

 app.controller("secondCtrl", function ($scope) {
     $scope.handleClick = function (msg) {
         $scope.$emit('eventName', { message: msg });
     };
 });
