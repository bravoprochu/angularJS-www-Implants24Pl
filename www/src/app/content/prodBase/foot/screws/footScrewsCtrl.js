(function () {
    'use strict';

    angular
        .module('app')
        .controller('footScrewsCtrl', footScrewsCtrl);

    footScrewsCtrl.$inject = ['commonFunctions'];

    function footScrewsCtrl(cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'footScrews';
        vm.menuShow = menuShow;


        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


    }
})();
