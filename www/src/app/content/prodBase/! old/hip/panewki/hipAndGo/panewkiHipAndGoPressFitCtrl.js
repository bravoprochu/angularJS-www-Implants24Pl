(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkiHipAndGoPressFitCtrl', panewkiHipAndGoPressFitCtrl);

    panewkiHipAndGoPressFitCtrl.$inject = ['$scope', '$state', 'commonFunctions']; 

    function panewkiHipAndGoPressFitCtrl($scope, $state, cF) {
        var vm = this;
        vm.title = 'hipPanewkiHipAndGoPressFit';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


        vm.cups = [
            { c1: "256 617", c2: "S 46" },
            { c1: "256 618", c2: "S 48" },
            { c1: "256 619", c2: "S 50" },
            { c1: "256 620", c2: "S 52" },
            { c1: "256 621", c2: "S 54" },
            { c1: "256 622", c2: "S 56" },
            { c1: "256 623", c2: "S 58" },
            { c1: "256 624", c2: "S 60" },
            { c1: "256 625", c2: "S 62" },
            { c1: "256 626", c2: "S 64" },
            { c1: "256 627", c2: "S 66 (option)" },
            { c1: "256 628", c2: "S 68 (option)" },
            { c1: "256 629", c2: "S 70 (option)" },
            { c1: "256 630", c2: "S 72 (option)" },
            { c1: "256 631", c2: "S 74 (option)" },
        ];

        vm.ceramicInserts = [
            { c1: "256 670", c2: "ø 32 mm S 46-48" },
            { c1: "256 671", c2: "ø 32 mm S 50" },
            { c1: "256 675", c2: "ø 36 mm S 52" },
            { c1: "256 676", c2: "ø 36 mm S 54-56" },
            { c1: "256 677", c2: "ø 36 mm S 58-74" },
        ];
        vm.peStandardInserts = [
            { c1: "256 755", c2: "ø 28 mm S 46-48" },
            { c1: "256 648", c2: "ø 28 mm S 50" },
            { c1: "256 649", c2: "ø 28 mm S 52" },
            { c1: "256 650", c2: "ø 28 mm S 54-56" },
            { c1: "256 651", c2: "ø 28 mm S 58-74" },
        ];
        vm.fixationScrews = [
            { c1: "207 110", c2: "ø 6.5 mm L.15 mm" },
            { c1: "207 111", c2: "ø 6.5 mm L.20 mm" },
            { c1: "207 113", c2: "ø 6.5 mm L.25 mm" },
            { c1: "207 115", c2: "ø 6.5 mm L.30 mm" },
            { c1: "207 117", c2: "ø 6.5 mm L.35 mm" },
            { c1: "207 120", c2: "ø 6.5 mm L.40 mm" },
            { c1: "207 122", c2: "ø 6.5 mm L.45 mm" },
            { c1: "207 123", c2: "ø 6.5 mm L.50 mm" },
            { c1: "207 127", c2: "ø 6.5 mm L.60 mm" },
        ];

        vm.flatEdgedPeInserts = [
            { c1: "256 754", c2: "ø 28 mm S 46-48" },
            { c1: "256 637", c2: "ø 28 mm S 50" },
            { c1: "256 638", c2: "ø 28 mm S 52" },
            { c1: "256 639", c2: "ø 28 mm S 54-56" },
            { c1: "256 640", c2: "ø 28 mm S 58-74" },
        ];
    }
})();
