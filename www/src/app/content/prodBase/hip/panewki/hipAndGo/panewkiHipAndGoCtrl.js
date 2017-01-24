(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkiHipAndGoCtrl', panewkiHipAndGoCtrl);

    panewkiHipAndGoCtrl.$inject = ['$scope', '$state', 'commonFunctions'];

    function panewkiHipAndGoCtrl($scope, $state, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'hipPanewkiHipAndGo';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


    }
})();
