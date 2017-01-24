(function () {
    'use strict';

    angular
        .module('app')
        .controller('kneeCtrl', kneeCtrl);

    kneeCtrl.$inject = ['$state', 'commonFunctions']; 

    function kneeCtrl($state, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'knee';
        vm.isScreenSmall = cF.isScreenSmall();
        vm.menuShow = menuShow;


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
