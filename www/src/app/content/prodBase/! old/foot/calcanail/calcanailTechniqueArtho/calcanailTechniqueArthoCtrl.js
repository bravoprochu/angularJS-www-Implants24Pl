(function () {
    'use strict';

    angular
        .module('app')
        .controller('calcanailTechniqueArthoCtrl', calcanailTechniqueArthoCtrl);

    calcanailTechniqueArthoCtrl.$inject = ['$state', 'commonFunctions'];

    function calcanailTechniqueArthoCtrl($state, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'calcanailTechniqueArtho';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

        vm.f1 = [
                { c1: "reference", c2: "Arthrodesis Nail Ø12" },
                { c1: "265 549", c2: "Calcanail® Nail Ø12 L 65 + cap" },
                { c1: "265 550", c2: "Calcanail® Nail Ø12 L 75 + cap" },
                { c1: "265 551", c2: "Calcanail® Nail Ø12 L 85 + cap" },

        ];

        vm.f2 = [
                { c1: "reference", c2: "Screw" },
                { c1: "267 264", c2: "Cannulated screw Ø5 L 24" },
                { c1: "267 265", c2: "Cannulated screw Ø5 L 26" },
                { c1: "267 266", c2: "Cannulated screw Ø5 L 28" },
                { c1: "265 552", c2: "Cannulated screw Ø5 L 30" },
                { c1: "265 553", c2: "Cannulated screw Ø5 L 32" },
                { c1: "265 554", c2: "Cannulated screw Ø5 L 34" },
                { c1: "265 555", c2: "Cannulated screw Ø5 L 36" },
                { c1: "265 556", c2: "Cannulated screw Ø5 L 38" },
                { c1: "265 557", c2: "Cannulated screw Ø5 L 40" },
        ];



    }
})();
