var app = angular.module('app', ['angularMoment']);

app.controller('MainCtrl', function($scope) {

    var date = new Date("June 09, 2016 13:59:00");

    $scope.timeSet = date;    
    console.log($scope.timeSet);
});