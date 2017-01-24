(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkiHipAndGoDualCtrl', panewkiHipAndGoDualCtrl);

    panewkiHipAndGoDualCtrl.$inject = ['$scope', '$state', 'commonFunctions']; 

    function panewkiHipAndGoDualCtrl($scope, $state, cF) {
        var vm = this;
        vm.title = 'hipPanewkiHipAndGoDual';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


        vm.dualMobilityCups = [
            { c1: "256 688", c2: "Dual mobility S46" },
            { c1: "256 689", c2: "Dual mobility S48" },
            { c1: "256 690", c2: "Dual mobility S50" },
            { c1: "256 691", c2: "Dual mobility S52" },
            { c1: "256 692", c2: "Dual mobility S54" },
            { c1: "256 693", c2: "Dual mobility S56" },
            { c1: "256 694", c2: "Dual mobility S58" },
            { c1: "256 695", c2: "Dual mobility S60" },
            { c1: "256 696", c2: "Dual mobility S62" },
            { c1: "256 697", c2: "Dual mobility S64" },
        ];

        vm.doubleMobilityInserts = [
            { c1: "256 709", c2: "Insert dual mobility Ø 22 S46" },
            { c1: "256 720", c2: "Insert dual mobility Ø 28 S48" },
            { c1: "256 721", c2: "Insert dual mobility Ø 28 S50" },
            { c1: "256 722", c2: "Insert dual mobility Ø 28 S52" },
            { c1: "256 723", c2: "Insert dual mobility Ø 28 S54" },
            { c1: "256 724", c2: "Insert dual mobility Ø 28 S56" },
            { c1: "256 725", c2: "Insert dual mobility Ø 28 S58" },
            { c1: "256 726", c2: "Insert dual mobility Ø 28 S60" },
            { c1: "256 727", c2: "Insert dual mobility Ø 28 S62" },
            { c1: "256 728", c2: "Insert dual mobility Ø 28 S64" },
        ];
    }
})();
