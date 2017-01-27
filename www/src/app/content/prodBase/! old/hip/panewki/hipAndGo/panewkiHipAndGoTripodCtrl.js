(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkiHipAndGoTripodCtrl', panewkiHipAndGoTripodCtrl);

    panewkiHipAndGoTripodCtrl.$inject = ['$scope', '$state', 'commonFunctions']; 

    function panewkiHipAndGoTripodCtrl($scope, $state, cF) {
        var vm = this;
        vm.title = 'hipPanewkiHipAndGoTripod';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


        vm.cups = [
            { c1: "256 698", c2: "Dual mobility tripod S 46" },
            { c1: "256 699", c2: "Dual mobility tripod S 48" },
            { c1: "256 700", c2: "Dual mobility tripod S 50" },
            { c1: "256 701", c2: "Dual mobility tripod S 52" },
            { c1: "256 702", c2: "Dual mobility tripod S 54" },
            { c1: "256 703", c2: "Dual mobility tripod S 56" },
            { c1: "256 704", c2: "Dual mobility tripod S 58" },
            { c1: "256 705", c2: "Dual mobility tripod S 60" },
            { c1: "256 706", c2: "Dual mobility tripod S 62" },
            { c1: "256708", c2: "Dual mobility tripod S 64" },

        ];

        vm.inserts = [
            { c1: "256 709", c2: "Dual mobility insert Ø22 S 46" },
            { c1: "256 720", c2: "Dual mobility insert Ø28 S 48" },
            { c1: "256 721", c2: "Dual mobility insert Ø28 S 50" },
            { c1: "256 722", c2: "Dual mobility insert Ø28 S 52" },
            { c1: "256 723", c2: "Dual mobility insert Ø28 S 54" },
            { c1: "256 724", c2: "Dual mobility insert Ø28 S 56" },
            { c1: "256 725", c2: "Dual mobility insert Ø28 S 58" },
            { c1: "256 726", c2: "Dual mobility insert Ø28 S 60" },
            { c1: "256 727", c2: "Dual mobility insert Ø28 S 62" },
            { c1: "256 728", c2: "Dual mobility insert Ø28 S 64" },
        ];
        vm.tripodFixationScrews = [
            { c1: "260 594", c2: "Ø4,5 L.30" },
            { c1: "260 597", c2: "Ø4,5 L.36" },
            { c1: "260 599", c2: "Ø4,5 L.40" },
            { c1: "260 602", c2: "Ø4,5 L.46" },
            { c1: "260 604", c2: "Ø4,5 L.50" },
            { c1: "260 607", c2: "Ø4,5 L.56" },
            { c1: "260 609", c2: "Ø4,5 L.60" },
        ];
        vm.fixationCups = [
            { c1: "256 729", c2: "Cup fi xation plug - Tripod double mobility" },
        ];
    }
})();
