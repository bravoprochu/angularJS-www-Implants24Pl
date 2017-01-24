(function () {
    'use strict';

    angular
        .module('app')
        .controller('panewkiAtlanteCtrl', panewkiAtlanteCtrl);

    panewkiAtlanteCtrl.$inject = ['$scope', 'commonFunctions']; 

    function panewkiAtlanteCtrl($scope, cF) {
        var vm = this;
        vm.title = 'hipPanewkiAtlante';
        vm.menuShow = menuShow;

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };

    }
})();
