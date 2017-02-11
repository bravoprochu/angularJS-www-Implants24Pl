(function () {
    'use strict';

    angular
        .module('app')
        .controller('protezaBarkuOdwroconaCtrl', protezaBarkuOdwroconaCtrl);

    protezaBarkuOdwroconaCtrl.$inject = ['$state', '$rootScope','commonFunctions','imagePreload', 'statesHelp'];

    function protezaBarkuOdwroconaCtrl($state, $rootScope, cF, imagePreload, statesHelp) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'protezaBarkuOdwrocona';

        vm.stateName = $state.current.name;
        vm.getImageByIdx = getImageByIdx;
        vm.goParent = goParent;
        vm.goTo = goTo;
        vm.images = cF.getImageList(vm.title);
        vm.menu = statesHelp.prepMenu(vm.stateName);
        vm.settings = cF.settings;
        vm.isParent = statesHelp.isParent(vm.stateName)
        vm.stateNext = statesHelp.goNext($state.current);
        vm.statePrev = statesHelp.goPrev($state.current);

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            vm.isParent = statesHelp.isParent(toState.name);
            vm.stateNext = statesHelp.goNext(toState);
            vm.statePrev = statesHelp.goPrev(toState);
        });

        function getImageByIdx(idx) {
            return vm.imagesObj[idx]
        }

        function goParent() {
            $state.go($state.current.parent);
        }

        function goTo(stateName) {
            $state.go(stateName);
        }

        imagePreload.preload(vm.images, vm.title).then(function (images) {
            vm.imagesObj = images;
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });
      
        vm.video = cF.configData.config.videoCard.dane[1];

        vm.humeralStem = [
            { reference: "reference", diameter: "diameter", height: "height" },
            { reference: "260 516", diameter: "Ø 08", height: "120" },
            { reference: "257 320", diameter: "Ø 08", height: "170" },
            { reference: "260 517", diameter: "Ø 10", height: "125" },
            { reference: "260 519", diameter: "Ø 12", height: "130" },
            { reference: "260 521", diameter: "Ø 14", height: "135" },
        ];
        vm.stdHumeralInsert = [
            { reference: "reference", diameter: "diameter", height: "height" },
            { reference: "257 057", diameter: "Ø 36", height: "00" },
            { reference: "257 058", diameter: "Ø 36", height: "05" },
            { reference: "257 059", diameter: "Ø 36", height: "10" },
            { reference: "257 060", diameter: "Ø 39", height: "00" },
            { reference: "257 061", diameter: "Ø 39", height: "05" },
            { reference: "257 062", diameter: "Ø 39", height: "10" },
            { reference: "257 063", diameter: "Ø 42", height: "00" },
            { reference: "257 064", diameter: "Ø 42", height: "05" },
            { reference: "257 065", diameter: "Ø 42", height: "10" },
        ];
        vm.cancellousBoneScrew = [
            { reference: "reference", diameter: "diameter", height: "height" },
            { reference: "260 576", diameter: "Ø 5.5", height: "32" },
            { reference: "260 577", diameter: "Ø 5.5", height: "36" },
            { reference: "260 578", diameter: "Ø 5.5", height: "40" },
            { reference: "260 584", diameter: "Ø 5.5", height: "45" },
            { reference: "260 585", diameter: "Ø 5.5", height: "50" },
        ];

        vm.cortialBoneScrew = [
            { reference: "reference", diameter: "diameter", height: "height" },
            { reference: "260 595", diameter: "Ø 4.5", height: "32" },
            { reference: "260 596", diameter: "Ø 4.5", height: "34" },
            { reference: "260 597", diameter: "Ø 4.5", height: "36" },
            { reference: "260 598", diameter: "Ø 4.5", height: "38" },
            { reference: "260 599", diameter: "Ø 4.5", height: "40" },

        ];

        vm.glenosphere = [
            { reference: "reference", diameter: "diameter" },
            { reference: "260 566", diameter: "Ø 36" },
            { reference: "260 567", diameter: "Ø 39" },
            { reference: "260 568", diameter: "Ø 42" },
        ];

        vm.metalBackGlenoidBase = [
            { reference: "reference", diameter: "size" },
            { reference: "260 552", diameter: "44" },
            { reference: "260 553", diameter: "46" },
            { reference: "260 554", diameter: "48" },
            { reference: "260 555", diameter: "50" },
        ];



        vm.trialHumeralInsert = [
            { col1: "glenosphere", col2: "humeral insert", col3: "metal-black glenoid base" },
            { col1: "Ø36", col2: "Ø36/00-36/05", col3: "44" },
            { col1: "Ø39", col2: "Ø39/00-39/05", col3: "44 or 46" },
            { col1: "Ø42", col2: "Ø42/00-42/05", col3: "46 or 48" },
        ];

    }
})();
