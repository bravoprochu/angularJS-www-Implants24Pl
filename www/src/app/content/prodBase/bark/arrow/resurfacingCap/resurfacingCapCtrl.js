(function () {
    'use strict';

    angular
        .module('app')
        .controller('resurfacingCapCtrl', resurfacingCapCtrl);

    resurfacingCapCtrl.$inject = ['$state', 'commonFunctions', 'imagePreload', 'statesHelp'];

    function resurfacingCapCtrl($state, cF, imagePreload, statesHelp) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'resurfacingCap';

        vm.getImageUrl = getImageUrl;
        vm.images = cF.getImageList(vm.title);
        vm.menu = statesHelp.prepMenu($state.current.name);
        vm.menuShow = menuShow;
        var parentState = statesHelp.getParent($state.current.name);
        vm.parentStateName = parentState != null ? parentState.name : null;
        vm.settings = cF.settings;

        function getImageUrl(idx) {
            return cF.getImageUrl(idx, vm.title);
        }

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });

    }
})();
