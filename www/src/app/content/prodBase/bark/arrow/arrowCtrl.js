(function () {
    'use strict';

    angular
        .module('app')
        .controller('arrowCtrl', arrowCtrl);

    arrowCtrl.$inject = ['commonFunctions', 'imagePreload']; 

    function arrowCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'arrow';

        vm.menuShow = menuShow
        vm.getImageUrl = function (idx) { return vm.images[idx]; }
        vm.settings = cF.settings;
        activate();



        function activate() { }

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };
        vm.base='images/arrow/anatomiczna/'
        vm.images = [
            //menu
            'proteza-barku-anatomiczna-1.jpg',
            'proteza-barku-odwrocona-1.jpg',
            'arrow_to_resurfacing_eng-1.jpg',
        ];

        angular.forEach(vm.images, function (img) {
            img = vm.base + img;
        });

        vm.images=cF.imageLinkUpdate(vm.images, vm.base);

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
