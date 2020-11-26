(function () {
    'use strict';

    angular
        .module('app')
        .controller('prodBaseCtrl', prodBaseCtrl);

    prodBaseCtrl.$inject = ['$rootScope', '$state', 'commonFunctions', 'statesHelp']; 

    function prodBaseCtrl($rootScope, $state, cF, statesHelp) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'prodBase';



    }
})();
