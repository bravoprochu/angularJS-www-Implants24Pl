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
        vm.idzDo = idzDo
        vm.menuShow = menuShow;
        vm.settings = cF.settings;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


        function getImageUrl(idx) {
            return cF.getImageUrl(idx, vm.title);
        }

        function idzDo(state) {
            console.log(state);
            $state.go(state);
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
