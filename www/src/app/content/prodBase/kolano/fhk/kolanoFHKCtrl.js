(function () {
    'use strict';

    angular
        .module('app')
        .controller('kolanoFHKCtrl', kolanoFHKCtrl);

    kolanoFHKCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function kolanoFHKCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'kolanoFHK';

        vm.images = cF.getImageList(vm.title);
        vm.getImageUrl = getImageUrl;
        vm.menu = cF.menuPrepare(vm.title);
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
