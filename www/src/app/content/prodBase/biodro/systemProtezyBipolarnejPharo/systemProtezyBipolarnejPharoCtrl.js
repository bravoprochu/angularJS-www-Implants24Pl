(function () {
    'use strict';

    angular
        .module('app')
        .controller('systemProtezyBipolarnejPharoCtrl', systemProtezyBipolarnejPharoCtrl);

    systemProtezyBipolarnejPharoCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function systemProtezyBipolarnejPharoCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'systemProtezyBipolarnejPharo';


        vm.images = cF.getImageList(vm.title);
        vm.getImageByIdx = getImageByIdx;
        
        vm.menuShow = menuShow;
        vm.settings = cF.settings;

        function getImageByIdx(idx) {
            return vm.imagesObj[idx]
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
