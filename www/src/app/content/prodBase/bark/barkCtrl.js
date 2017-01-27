(function () {
    'use strict';

    angular
        .module('app')
        .controller('barkCtrl', barkCtrl);

    barkCtrl.$inject = ['$state','commonFunctions', 'imagePreload']; 

    function barkCtrl($state, cF, imagePreload) {
        var vm = this;
        vm.title = 'bark';

        vm.images = cF.getImageList(vm.title);
        vm.getImageUrl = getImageUrl;
        vm.menuShow = menuShow;
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
