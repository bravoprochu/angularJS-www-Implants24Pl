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
        vm.idzDo = cF.idzDo;
        vm.isScreenSize = cF.isScreenSize;
//        vm.menu = cF.menuPrepare($state.current.name);
//        vm.menu = cF.menuPrepare;
        vm.menuShow = menuShow;



        $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
//            event.preventDefault();
            // transitionTo() promise will be rejected with 
            // a 'transition prevented' error
        })


        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };


    }
})();
