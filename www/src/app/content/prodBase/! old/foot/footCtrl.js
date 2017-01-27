(function () {
    'use strict';

    angular
        .module('app')
        .controller('footCtrl', footCtrl);

    footCtrl.$inject = ['$scope', 'commonFunctions']; 

    function footCtrl($scope, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'foot';
        vm.idzDo = cF.idzDo
        vm.isScreenSmall = cF.isScreenSmall();

        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

    }
})();
