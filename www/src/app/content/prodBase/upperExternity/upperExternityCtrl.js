(function () {
    'use strict';

    angular
        .module('app')
        .controller('upperExternityCtrl', upperExternityCtrl);

    upperExternityCtrl.$inject = ['$state','commonFunctions']; 

    function upperExternityCtrl($state, cF) {
        var vm = this;
        vm.title = 'upperExternity';
        vm.idzDo = cF.idzDo
        vm.isScreenSmall = cF.isScreenSmall();

        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
    }
})();
