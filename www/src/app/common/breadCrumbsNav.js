(function() {
    'use strict';

    angular
        .module('app')
        .directive('breadCrumbsNav', breadCrumbsNav)
//        .controller('breadCrumbsNavCtrl', breadCrumbsNavCtrl);

    breadCrumbsNav.$inject = ['$rootScope'];
    
    function breadCrumbsNav($rootScope) {
        // Usage:
        //     <breadCrumbsNav></breadCrumbsNav>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'app/common/breadCrumbsNav.html',
            controller: breadCrumbsNavCtrl,
            controllerAs: 'vm',
            scope: {}


        };
        return directive;

        function link(scope, element, attrs) {
        }
    };

    breadCrumbsNavCtrl.$inject = ['$rootScope', '$state', '$mdMedia'];
    function breadCrumbsNavCtrl($rootScope, $state, $mdMedia) {
        var vm = this;

        vm.menu = menuCrumbsPrepare();
        vm.isScreenSmall = isScreenSmall();
        vm.menuParent = menuParent;
        

        $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            vm.menu = menuCrumbsPrepare();
        });


        function isScreenSmall(){
            if ($mdMedia('xs') || $mdMedia('sm')) {
                return true;
            } else return false;
        }


        function menuCrumbsPrepare() {
            var menu = [];
            var searchInProgress = true;
            var currState = $state.current;
            menu.push(currState);
            while (searchInProgress) {
                var parentState = currState.parent;
                if (parentState !== undefined && parentState !=='main') {
                    currState = findState(currState.parent);
                    menu.push(currState);

                } else {
                    searchInProgress = false;
                }
            }
            //            menuBreadCrumbs = menu;
            return menu.reverse();

        };

        function menuParent() {
            var menuLength = vm.menu.length;
            var lastState = vm.menu[menuLength - 1];
            var parent=lastState.parent;
            if (menuLength > 2) {
                $state.go(parent);
            }
        }

        function findState(parentName) {
            var states = $state.get();
            for (var i = 0; i < states.length; i++) {
                if (states[i].name == parentName) {
                    return states[i];
                }
            }
            return [];
        }

    };

})();