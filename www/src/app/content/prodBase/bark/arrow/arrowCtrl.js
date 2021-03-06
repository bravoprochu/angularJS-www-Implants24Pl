﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('arrowCtrl', arrowCtrl);

    arrowCtrl.$inject = ['commonFunctions', 'imagePreload']; 

    function arrowCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'arrow';

        vm.images = cF.getImageList(vm.title);
        vm.getImageUrl = getImageUrl;
        vm.menuShow = menuShow;
        vm.settings = cF.settings;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


        function getImageUrl(idx) {
            return cF.getImageUrl(idx, vm.title);
        }

        imagePreload.preload(vm.images, vm.title).then(function (images) {
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });

    }
})();
