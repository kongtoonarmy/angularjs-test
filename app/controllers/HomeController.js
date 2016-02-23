routerApp.controller('homeCtrl', ['$scope', 'friends', function($scope, friends) {
    $scope.title = "Home",
    $scope.friends = friends;
    $scope.items = ['home', 'about', 'contact'];
    $scope.selectedValue = 'home';

    $scope.save = function() {
        //$http.post('/api/friends', $friends)
        alert(JSON.stringify($scope.friends));
    };
}]);
