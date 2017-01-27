(function () {
    'use strict';

    angular
        .module('app')
        .controller('trzpienieHipAndGoCtrl', trzpienieHipAndGoCtrl);

    trzpienieHipAndGoCtrl.$inject = ['$scope', 'commonFunctions'];

    function trzpienieHipAndGoCtrl($scope, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'hipTrzpienieHipAndGo';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

        vm.standardStems = [
            { c1: "256 597", c2: "Stem 130° CL HAP S 1" },
            { c1: "256 598", c2: "Stem 130° CL HAP S 2" },
            { c1: "256 599", c2: "Stem 130° CL HAP S 3" },
            { c1: "256 600", c2: "Stem 130° CL HAP S 4" },
            { c1: "256 601", c2: "Stem 130° CL HAP S 5" },
            { c1: "256 602", c2: "Stem 130° CL HAP S 6" },
            { c1: "256 603", c2: "Stem 130° CL HAP S 7" },
            { c1: "256 604", c2: "Stem 130° CL HAP S 8" },
            { c1: "256 605", c2: "Stem 130° CL HAP S 9" },
            { c1: "256 606", c2: "Stem 130° CL HAP S 10" },
        ];
        vm.lateralisedStems = [
            { c1: "256 607", c2: "Stem 122° CL HAP S 1" },
            { c1: "256 608", c2: "Stem 122° CL HAP S 2" },
            { c1: "256 609", c2: "Stem 122° CL HAP S 3" },
            { c1: "256 610", c2: "Stem 122° CL HAP S 4" },
            { c1: "256 611", c2: "Stem 122° CL HAP S 5" },
            { c1: "256 612", c2: "Stem 122° CL HAP S 6" },
            { c1: "256 613", c2: "Stem 122° CL HAP S 7" },
            { c1: "256 614", c2: "Stem 122° CL HAP S 8" },
            { c1: "256 615", c2: "Stem 122° CL HAP S 9" },
            { c1: "256 616", c2: "Stem 122° CL HAP S 10" },
        ];
        vm.bioloxForte = [
            { c1: "234 131", c2: "Head 12/14 Ø28 (-3,5)" },
            { c1: "234 132", c2: "Head 12/14 Ø28 (0)" },
            { c1: "234 133", c2: "Head 12/14 Ø28 (+3,5)" },
            { c1: "250 729", c2: "Head 12/14 Ø32 (-3,5)" },
            { c1: "250 730", c2: "Head 12/14 Ø32 (0)" },
            { c1: "250 731", c2: "Head 12/14 Ø32 (+3,5)" },
            { c1: "254 525", c2: "Head 12/14 Ø36 (-3,5)" },
            { c1: "254 526", c2: "Head 12/14 Ø36 (0)" },
            { c1: "254 527", c2: "Head 12/14 Ø36 (+3,5)" },
        ];

        vm.stainlessSteelHeads = [
            { c1: "231 402", c2: "Head 12/14 Ø22,2 (0)" },
            { c1: "231 403", c2: "Head 12/14 Ø22,2 (+2)" },
            { c1: "231 391", c2: "Head 12/14 Ø28 (-3,5)" },
            { c1: "231 392", c2: "Head 12/14 Ø28 (0)" },
            { c1: "231 393", c2: "Head 12/14 Ø28 (+3,5)" },
            { c1: "231 394", c2: "Head 12/14 Ø28 (+7)" },
            { c1: "231 395", c2: "Head 12/14 Ø28 (+10)" },
        ];

    }
})();
