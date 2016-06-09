var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {

    $scope.fooCount = 0;

    $scope.$watch("fooCount", function handleFooChange(newValue) {
        console.log("Watch fooCount:", newValue);
    });

    $scope.incrementFoo = function() {
        $scope.fooCount++;
    };
});