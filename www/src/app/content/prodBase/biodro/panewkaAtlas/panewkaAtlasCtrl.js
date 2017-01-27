(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkaAtlasCtrl', panewkaAtlasCtrl);

    panewkaAtlasCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function panewkaAtlasCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'panewkaAtlas';
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
            'panewkaAtlante1.png',
            'panewkaAtlante2.png',
            'panewkaAtlante3.png',
            'panewkaAtlante4.png',
            'panewkaAtlante5.png',
            'panewkaAtlante6.png',
            'panewkaAtlante7.png',
            'panewkaAtlante8.png',

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
