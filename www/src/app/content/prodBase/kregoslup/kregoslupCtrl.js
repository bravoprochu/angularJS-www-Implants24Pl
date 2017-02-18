(function () {
    'use strict';

    angular
        .module('app')
        .controller('kregoslupCtrl', kregoslupCtrl);

    kregoslupCtrl.$inject = ['$rootScope', '$state', 'commonFunctions', 'imagePreload', 'statesHelp'];

    function kregoslupCtrl($rootScope, $state, cF, imagePreload, statesHelp) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'kregoslup';

        vm.stateName = $state.current.name;
        vm.getImageByIdx = getImageByIdx;
        vm.goParent = goParent;
        vm.goTo = goTo;
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

        imagePreload.preload(cF.getImageList(vm.title)).then(function (images) {
            vm.imagesObj = images;
            vm.startMode = true;
        }, function (error) {
            vm.errorImageObj = error;
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });



        vm.cervicalDiscs = [
            { c1: "reference", c2: "designation" },
            { c1: "264363", c2: "Size 1 (13X15) height 5" },
            { c1: "264364", c2: "Size 1 (13X15) height 6" },
            { c1: "264365", c2: "Size 1 (13X15) height 7" },
            { c1: "264366", c2: "Size 2 (14X17) height 5" },
            { c1: "264367", c2: "Size 2 (14X17) height 6" },
            { c1: "264368", c2: "Size 2 (14X17) height 7" },
            { c1: "264369", c2: "Size 3 (15X20) height 5" },
            { c1: "264370", c2: "Size 3 (15X20) height 6" },
            { c1: "264371", c2: "Size 3 (15X20) height 7" },
        ];

        vm.lumbarDiscs = [
            { c1: "reference", c2: "designation" },
            { c1: "255682", c2: "Inclination 7° height 10" },
            { c1: "255683", c2: "Inclination 7° height 12" },
            { c1: "255687", c2: "Inclination 9° height 10" },
            { c1: "255688", c2: "Inclination 9° height 12" },
            { c1: "255690", c2: "Inclination 11° height 10" },
            { c1: "255691", c2: "Inclination 11° height 12" },
        ];

        vm.lumberDesignToReproduce1 = [
            { c1: "Flexion(A/P) & Extension", c2: "2.6 to 4.7 Nm per degree" },
            { c1: "Lateral inclination", c2: "5 º" },
            { c1: "Translation", c2: "Yes" },
            { c1: "Axial rotation", c2: "4 to 6 Nm per degree" },
            { c1: "Axial compression", c2: "1500 to 3000 N per mm" },
            { c1: "Elastic return", c2: "Yes" },
        ];
        vm.lumberDesignToReproduce2 = [
            { c1: "Flexion(A/P) & Extension", c2: "2 Nm per degree" },
            { c1: "Lateral inclination", c2: "3.5 º" },
            { c1: "Translation", c2: "Yes" },
            { c1: "Axial rotation", c2: "2 Nm per degree" },
            { c1: "Axial compression", c2: "2300 N par mm" },
            { c1: "Elastic return", c2: "Yes" },
        ];

        vm.cervicalDesignToReproduce1 = [
            { c1: "Flexion(A/P) & Extension", c2: "7° / 7°" },
            { c1: "Lateral inclination", c2: "6° / 6°" },
            { c1: "Axial rotation", c2: "4° / 4°" },
        ];
        vm.cervicalDesignToReproduce2 = [
            { c1: "Flexion(A/P) & Extension", c2: "7° / 7°" },
            { c1: "Lateral inclination", c2: "5° / 5°" },
            { c1: "Axial rotation", c2: "3.5° / 3.5°" },

        ];



    }
})();
