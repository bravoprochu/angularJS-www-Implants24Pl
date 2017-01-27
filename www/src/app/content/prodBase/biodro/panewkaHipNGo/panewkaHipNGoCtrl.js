(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkaHipNGoCtrl', panewkaHipNGoCtrl);

    panewkaHipNGoCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function panewkaHipNGoCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'panewkaHipNGo';
        vm.menuShow = menuShow
        vm.getImageUrl = function (idx) { return vm.images[idx]; }
        vm.settings = cF.settings;
        vm.menuShow = menuShow;


        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.menu = cF.menuPrepare(vm.title);

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.base = 'images/biodro/panewkaAtlante2/'
        vm.images = [
            //menu
        ];

        angular.forEach(vm.images, function (img) {
            img = vm.base + img;
        });

        vm.images = cF.imageLinkUpdate(vm.images, vm.base);

        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            vm.laoderInfo = "";
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.loaderInfo = notify;
        });

    }
})();
