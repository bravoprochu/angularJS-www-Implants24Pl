(function () {
    'use strict';

    angular
        .module('app')
        .controller('startCtrl', startCtrl);

    startCtrl.$inject = ['$timeout', '$window','commonFunctions']; 

    function startCtrl($timeout, $window, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'start';




        angular.element($window).bind('resize', function () {
            angular.element($window).bind('resize', function () {
                $timeout(function () {
                    cF.settingsUpdate();
                }, 500);
            });
        });


    }
})();
