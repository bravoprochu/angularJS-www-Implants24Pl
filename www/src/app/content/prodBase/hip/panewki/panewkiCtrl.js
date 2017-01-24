(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkiCtrl', panewkiCtrl);

    panewkiCtrl.$inject = ['$scope', 'commonFunctions']; 

    function panewkiCtrl($scope, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'hipPanewki';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

        

    };
})();
