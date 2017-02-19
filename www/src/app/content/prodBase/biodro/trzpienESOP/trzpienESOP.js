(function () {
    'use strict';

    angular
        .module('app')
        .controller('trzpienESOPCtrl', trzpienESOPCtrl);

    trzpienESOPCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function trzpienESOPCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'trzpienESOP';

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



    }
})();
