(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkiAtlasCtrl', panewkiAtlasCtrl);

    panewkiAtlasCtrl.$inject = ['$scope', 'commonFunctions']; 

    function panewkiAtlasCtrl($scope, cF) {
        var vm = this;
        vm.title = 'hipPanewkiAtlas';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        

        vm.extremeSizes = [
            { c1: "S64", c2: "241 372" },
            { c1: "S66", c2: "241 373" },
            { c1: "S68", c2: "241 374" },
            { c1: "S70", c2: "241 375" },
        ];

        vm.screwsForFixation = [
            { c1: "207 110", c2: "Ø 6,5mm - L.15mm" },
            { c1: "207 111", c2: "Ø 6,5mm - L.20mm" },
            { c1: "207 113", c2: "Ø 6,5mm - L.25mm" },
            { c1: "207 115", c2: "Ø 6,5mm - L.30mm" },
            { c1: "207 117", c2: "Ø 6,5mm - L.35mm" },
            { c1: "207 120", c2: "Ø 6,5mm - L.40mm" },
            { c1: "207 122", c2: "Ø 6,5mm - L.45mm" },
            { c1: "207 123", c2: "Ø 6,5mm - L.50mm" },
            { c1: "207 125", c2: "Ø 6,5mm - L.55mm" },
            { c1: "207 127", c2: "Ø 6,5mm - L.60mm" },
        ];
    }
})();
