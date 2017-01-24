(function () {
    'use strict';

    angular
        .module('app')
        .controller('prodBaseCtrl', prodBaseCtrl);

    prodBaseCtrl.$inject = ['$scope', 'commonFunctions']; 

    function prodBaseCtrl($scope, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'prodBase';
        vm.idzDo = cF.idzDo;
        vm.isScreenSmall = cF.isScreenSmall();
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


        function menuprod() {
                cF.idzDo(vm.menu1);
        };

    }
})();
