'use strict';

angular.module('bohAdmin', ['config.domain'])

    .config(function bohAdminConfig() {
        console.log('Pass in config');
    })
    .controller('AppCtrl', function AppCtrl($scope, DOMAINS) {
        $scope.title = 'AngularJS with Constant';

        console.log(DOMAINS);
        $scope.domain = DOMAINS;
    });
