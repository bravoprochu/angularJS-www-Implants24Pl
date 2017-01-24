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
        vm.isScreenSmall = cF.isScreenSmall();
        

        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

        vm.images = [
            'http://implants24.pl/images/test/test01.jpg',
            'http://implants24.pl/images/test/test1x1.jpg',
            'http://implants24.pl/images/foot_miniMIS2_01_big.png',
            'http://implants24.pl/images/foot_calcanail_how_it_works_big.png',
            'http://implants24.pl/images/AR_arrowClosure3_big.png',
            'http://implants24.pl/images/hip_panewki_hng_dual7_big.png'
        ];

        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            imagePreload.setInfo("");
            vm.startMode = true;
            }, function (error) {
                console.log(error);
            }, function (notify) {
            });

    }
})();
