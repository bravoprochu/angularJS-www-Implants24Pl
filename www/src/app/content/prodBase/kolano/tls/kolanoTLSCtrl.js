(function () {
    'use strict';

    angular
        .module('app')
        .controller('kolanoTLSCtrl', kolanoTLSCtrl);

    kolanoTLSCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function kolanoTLSCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'kolanoTLS';
        vm.menuShow = menuShow
        vm.getImageUrl = function (idx) { return cF.getImageUrl(idx,vm.title)}
        vm.settings = cF.settings;
        vm.menuShow = menuShow;


        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.menu = cF.menuPrepare(vm.title);

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.base = 'images/kolano/osteoPlus/'
        vm.images = [

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
