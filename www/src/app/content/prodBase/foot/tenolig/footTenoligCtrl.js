(function () {
    'use strict';

    angular
        .module('app')
        .controller('footTenoligCtrl', footTenoligCtrl);

    footTenoligCtrl.$inject = ['$state', 'commonFunctions']; 

    function footTenoligCtrl($state, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'footTenolig';
        vm.isScreenSmall = cF.isScreenSmall();
        vm.menuShow = menuShow;

        vm.videoUrl = "https://youtu.be/RhF7H9xXvCk";

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
