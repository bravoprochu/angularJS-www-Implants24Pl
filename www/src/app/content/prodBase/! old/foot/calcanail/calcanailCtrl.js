(function () {
    'use strict';

    angular
        .module('app')
        .controller('calcanailCtrl', calcanailCtrl);

    calcanailCtrl.$inject = ['$state', 'commonFunctions'];

    function calcanailCtrl($state, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'calcanail';
        vm.isScreenSmall = cF.isScreenSmall();
        vm.menuShow = menuShow;
        vm.menu = cF.menuPrepare(vm.title);
        vm.moveNext = moveNext;
        vm.movePrev = movePrev;


        vm.fracture = [
            { c1: "reference", c2: "Fracture Nail Ø10" },
            { c1: "265 546", c2: "Calcanail® Nail Ø10 L 45 + cap" },
            { c1: "265 547", c2: "Calcanail® Nail Ø10 L 50 + cap" },
            { c1: "265 548", c2: "Calcanail® Nail Ø10 L 55 + cap" },
        ];

        vm.arthrodesis = [
            { c1: "reference", c2: "Arthrodesis Nail Ø12" },
            { c1: "265 549", c2: "Calcanail® Nail Ø12 L 65 + cap" },
            { c1: "265 550", c2: "Calcanail® Nail Ø12 L 75 + cap" },
            { c1: "265 551", c2: "Calcanail® Nail Ø12 L 85 + cap" },
        ]

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

        function moveNext() {
            cF.slideToState(vm.menu);

        }

        function movePrev() {
            cF.slideToState(vm.menu, false);
        }

    }
})();
