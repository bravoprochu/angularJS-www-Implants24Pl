(function () {
    'use strict';

    angular
        .module('app')
        .controller('kolanoTLSCtrl', kolanoTLSCtrl);

    kolanoTLSCtrl.$inject = ['$rootScope', '$state', 'commonFunctions', 'imagePreload', 'statesHelp'];

    function kolanoTLSCtrl($rootScope, $state, cF, imagePreload, statesHelp) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'kolanoTLS';

        vm.stateName = $state.current.name;

        vm.getImageByIdx = getImageByIdx;
        vm.images = cF.getImageList(vm.title);
        vm.menu = statesHelp.prepMenu(vm.stateName);
        vm.settings = cF.settings;
        vm.isParent = statesHelp.isParent(vm.stateName);
        vm.stateNext = statesHelp.goNext;
        vm.statePrev = statesHelp.goPrev;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            vm.isParent = statesHelp.isParent(toState.name);
        });

        function getImageByIdx(idx) {
            return vm.imagesObj[idx]
        }

        imagePreload.preload(vm.images, vm.title).then(function (images) {
            vm.imagesObj = images;
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });

    }
})();
