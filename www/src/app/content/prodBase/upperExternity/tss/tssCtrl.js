(function () {
    'use strict';

    angular
        .module('app')
        .controller('tssCtrl', tssCtrl);

    tssCtrl.$inject = ['$state', 'commonFunctions']; 

    function tssCtrl($state, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'upperExternityTss';
        vm.menuShow = menuShow;
        vm.isScreenSmall = cF.isScreenSmall();

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.menu = cF.menuPrepare(vm.title);
        vm.moveNext = moveNext;
        vm.movePrev = movePrev;


        function moveNext() {
            cF.slideToState(vm.menu);

        }

        function movePrev() {
            cF.slideToState(vm.menu, false);
        }
    }
})();
