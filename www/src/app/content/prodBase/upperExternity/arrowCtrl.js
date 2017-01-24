(function () {
    'use strict';

    angular
        .module('app')
        .controller('arrowCtrl', arrowCtrl);

    arrowCtrl.$inject = ['$state','commonFunctions']; 

    function arrowCtrl($state, cF) {
        var vm = this;
        vm.title = 'upperExternityArrow';
        vm.idzDo = cF.idzDo
        vm.isScreenSmall = cF.isScreenSmall();


        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };



    }
})();
