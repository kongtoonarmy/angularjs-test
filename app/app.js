var app = angular.module('app', ['ngTagsInput']);

app.controller('MainCtrl', function($scope, $http) {

    /*$scope.tags = [
        { text: 'Tag-Json-1' },
        { text: 'Tag-Json-2' },
        { text: 'Tag-Json-3' },
        { text: 'Tag-Json-4' },
        { text: 'Tag-Json-5' }
    ];*/

    $scope.tags = [
            
    ];

    $scope.loadTags = function(query) {
        return $http.get('/data/tags.json');
        //return $scope.tags;
    };

    $scope.checkTags = function(tag) {
        console.log(tag);
        return tag;
    }
});