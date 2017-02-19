(function() {
    'use strict';

    angular
        .module('app')
        .directive('naviForMobile', naviForMobile);

    naviForMobile.$inject = ['$rootScope', '$state', 'statesHelp'];
    
    function naviForMobile($rootScope, $state, statesHelp) {
        // Usage:
        //     <naviForMobile></naviForMobile>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            scope: true,
            templateUrl: 'app/common/naviForMobile.html'
        };
        return directive;

        function link(scope, element, attrs) {
            
            scope.stateName = $state.current.name;
            scope.goTo = goTo;
//            scope.isParent = statesHelp.isParent(scope.stateName)
            scope.parentName = undefined;
            scope.stateNext = statesHelp.goNext($state.current);
            scope.statePrev = statesHelp.goPrev($state.current);

            prepStates(scope.stateName);
            

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                prepStates(toState.name);
                scope.stateNext = statesHelp.goNext(toState);
                scope.statePrev = statesHelp.goPrev(toState);
            });

            function prepStates(toState) {
                var parent = statesHelp.getParent(toState);
                scope.parentName = parent === null ? null : parent.name;
            }

            function goTo(stateName) {
                stateName != null ? $state.go(stateName) : null;
            }

        }
    }

})();