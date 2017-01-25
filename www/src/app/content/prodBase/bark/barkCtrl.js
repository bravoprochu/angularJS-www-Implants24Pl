(function () {
    'use strict';

    angular
        .module('app')
        .controller('barkCtrl', barkCtrl);

    barkCtrl.$inject = ['$state','commonFunctions', 'imagePreload']; 

    function barkCtrl($state, cF, imagePreload) {
        var vm = this;
        vm.title = 'bark';
        vm.idzDo = cF.idzDo;
        vm.goTop = cF.goTop;
        vm.getImageUrl = function (idx) { return vm.images[idx]; };
        vm.isScreenSmall = cF.isScreenSmall();
        

        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

        vm.base = 'images/arrow/'
        vm.images = [
            'arrow_logo.png',
            'telegraph_logo.png'

        ];

        angular.forEach(vm.images, function (img) {
            img = vm.base + img;
        });

        vm.images = cF.imageLinkUpdate(vm.images, vm.base);

        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            imagePreload.setInfo("");
            vm.startMode = true;
            }, function (error) {
                console.log(error);
            }, function (notify) {
            });

    }
})();
