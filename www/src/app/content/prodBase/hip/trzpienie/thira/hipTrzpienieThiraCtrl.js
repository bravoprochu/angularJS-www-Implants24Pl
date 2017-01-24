(function () {
    'use strict';

    angular
        .module('app')
        .controller('hipTrzpienieThiraCtrl', hipTrzpienieThiraCtrl);

    hipTrzpienieThiraCtrl.$inject = ['$scope', 'commonFunctions'];

    function hipTrzpienieThiraCtrl($scope, cF) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'hipTrzpienieThira';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


    }
})();
