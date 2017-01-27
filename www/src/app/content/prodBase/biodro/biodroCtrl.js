(function () {
    'use strict';

    angular
        .module('app')
        .controller('biodroCtrl', biodroCtrl);

    biodroCtrl.$inject = ['commonFunctions', 'imagePreload']; 
    
    function biodroCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'biodro';
        vm.menuShow = menuShow
        vm.getImageUrl = function (idx) { return vm.images[idx]; }
        vm.settings = cF.settings;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.base = 'images/biodro/'
        vm.images = [
            //menu
            'atlante_logo.png',
            'atlas_logo.png',
            'hipAndGo_logo.png',
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
