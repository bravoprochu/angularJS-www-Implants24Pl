(function () {
    'use strict';

    angular
        .module('app')
        .controller('trzpienieCtrl', trzpienieCtrl);

    trzpienieCtrl.$inject = ['$scope', 'commonFunctions']; 

    function trzpienieCtrl($scope, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'hipTrzpienie';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


    }
})();
