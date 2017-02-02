(function() {
    'use strict';

    angular
        .module('app')
        .directive('header', header);

    header.$inject = ['$mdSidenav','$rootScope', '$state', 'commonFunctions','statesHelp'];
    
    function header ($mdSidenav, $rootScope, $state, cF, statesHelp) {
        // Usage:
        //     <header></header>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'app/common/site/header.html'
            
        };
        return directive;

        function link(scope, element, attrs) {
            var currState = $state.current;
            scope.emailSend = cF.emailSend;
            scope.goParent = goParent;
            scope.goTo = goTo;
            scope.isScreenSize = cF.isScreenSize;
            scope.menu = statesHelp.prepMenu(currState.name);
            scope.menuCrumb = statesHelp.prepMenuCrumb(currState.name);
            scope.isHome = currState.name == 'home' ? true : false;
            scope.sidenavToggle = sidenavToggle;




            var parentState = statesHelp.getParent(currState.name);
            scope.parentState = parentState != null ? parentState.name : null;

            $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                console.log('---- state change ----');
                parentState = statesHelp.getParent(toState.name);
                scope.parentState = parentState != null ? parentState.name : null;
                scope.menu = statesHelp.prepMenu(toState.name);
                scope.menuCrumb = statesHelp.prepMenuCrumb(toState.name);
                scope.isHome = toState.name == 'home' ? true : false;
            });
            
            function goTo(state) {
                $state.go(state);
            }

            function goParent() {
                $state.go(scope.parentState);
            }

            function sidenavToggle() {
                $mdSidenav("sidenav").toggle();
            }

        }
    }

})();