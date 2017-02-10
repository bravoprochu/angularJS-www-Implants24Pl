(function () {
    'use strict';

    angular
        .module('app')
        .controller('trzpienESOPCtrl', trzpienESOPCtrl);

    trzpienESOPCtrl.$inject = ['commonFunctions', 'imagePreload'];

    function trzpienESOPCtrl(cF, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'trzpienESOP';


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
