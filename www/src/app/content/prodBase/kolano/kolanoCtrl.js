﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('kolanoCtrl', kolanoCtrl);

    kolanoCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function kolanoCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'kolano';

        vm.stateName = $state.current.name;

        vm.getImageUrl = getImageUrl;
        vm.images = cF.getImageList(vm.title);
        vm.menu = statesHelp.prepMenu(vm.stateName);
        vm.settings = cF.settings;
        vm.isParent = statesHelp.isParent(vm.stateName);
        vm.stateNext = statesHelp.goNext;
        vm.statePrev = statesHelp.goPrev;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            vm.isParent = statesHelp.isParent(toState.name);
        });

        function getImageUrl(idx) {
            return cF.getImageUrl(idx, vm.title);
        }

        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });


        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });

    }
})();
