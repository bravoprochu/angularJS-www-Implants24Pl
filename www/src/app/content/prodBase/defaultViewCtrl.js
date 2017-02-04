(function () {
    'use strict';

    angular
        .module('app')
        .controller('defaultViewCtrl', defaultViewCtrl);

    defaultViewCtrl.$inject = ['$mdMedia', '$state', 'commonFunctions', 'imagePreload', 'statesHelp'];

    function defaultViewCtrl($mdMedia, $state, cF, imagePreload, statesHelp) {
        /* jshint validthis:true */
        var vm = this;
        vm.stateName = $state.current.name;
        vm.title = vm.stateName;
        console.log($state);

        vm.getImageUrl = getImageUrl;
        vm.images = cF.getImageList(vm.title);
        vm.menuShow = menuShow
        var parentState = statesHelp.getParent(vm.stateName);
        vm.parentStateName = parentState != null ? parentState.name : null;
        vm.menu = statesHelp.prepMenu(vm.stateName);

        vm.settings = cF.settings;

        function getImageUrl(idx) {
            return cF.getImageUrl(idx, vm.title);
        }

        function menuShow() {
            console.log(cF.menuShowIfState(vm.title));
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
