(function () {
    'use strict';

    angular
        .module('app')
        .controller('footMiniinwazyjnaCtrl', footMiniinwazyjnaCtrl);

    footMiniinwazyjnaCtrl.$inject = ['commonFunctions'];

    function footMiniinwazyjnaCtrl(cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'footMiniinwazyjna';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

    }
})();
