(function () {
    'use strict';

    angular
        .module('app')
        .controller('telegraphCtrl', telegraphCtrl);

    telegraphCtrl.$inject = ['commonFunctions', 'imagePreload']; 

    function telegraphCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'telegraph';
        vm.menuShow = menuShow;


        vm.isScreenSmall = cF.isScreenSmall();
        vm.getImageUrl = function (idx) { return vm.images[idx]; }
        vm.settings = cF.settings;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.menu = cF.menuPrepare(vm.title);

        vm.base = 'images/telegraph/'
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
            console.log('error !');
            console.log(error);
        }, function (notify) {
            vm.loaderInfo = notify;
        });









    }
})();
