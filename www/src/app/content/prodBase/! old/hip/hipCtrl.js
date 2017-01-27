(function () {
    'use strict';

    angular
        .module('app')
        .controller('hipCtrl', hipCtrl);

    hipCtrl.$inject = ['$scope', 'commonFunctions']; 

    function hipCtrl($scope, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'hip';
        vm.idzDo = cF.idzDo
        vm.isScreenSmall = cF.isScreenSmall();

        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

    }
})();
