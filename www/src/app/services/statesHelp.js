(function () {
    'use strict';

    angular
        .module('app')
        .factory('statesHelp', statesHelp);

    statesHelp.$inject = ['$state'];

    function statesHelp($state) {
        var stateList = function () {
            var result = [];
            angular.forEach($state.get(), function (state) {
                if (angular.isUndefined(state.abstract)) {
                    result.push(state);
                }
            });
            return result;
        }();

        var service = {
            getParent: getParent,
            goNext:goNext,
            goPrev: goPrev,
            stateByName: stateByName,
            prepMenu: prepMenu,
            prepMenuCrumb: prepMenuCrumb,
            isParent: isParent

        };

        return service;

        function getParent(stateName) {
            var state = stateByName(stateName);
            if (state != undefined && angular.isDefined(state.parent)) {
                var parent = stateByName(state.parent);
                return parent != undefined ? parent: null;
            }
            return null;
        }

        function goNext() {
            var menu = prepMenu($state.current.name);
            if (menu.length == 0) return;
            var currState = $state.current;
            var idx = menu.indexOf(currState);
            if (idx - 1 < 0) return;
            $state.go(menu[idx - 1].name);
        }

        function goPrev(menu) {
            var menu = prepMenu($state.current.name);
            if (menu.length == 0) return;
            var currState = $state.current;
            var idx = menu.indexOf(currState);
            if (idx + 1 == menu.length) return;
            $state.go(menu[idx + 1].name);
        }

        function isParent(stateName) {
            var result = false;
            angular.forEach(stateList, function (state) {
                if (state.parent == stateName) {
                    result = true;
                }
            });
            return result;
        }

        function stateByName(stateName) {
            var result = undefined;
            angular.forEach(stateList, function (state) {
                if (state.name == stateName) {
                    result = state;
                }

            });
            return result;
        }

        function prepMenu(stateName) {
            var states = [];
            if (isParent(stateName)===true) {
                angular.forEach(stateList, function (state) {
                    if (state.parent == stateName && angular.isUndefined(state.abstract)) {
                        states.push(state);
                    }
                });
            } else {
                angular.forEach(stateList, function (state) {
                    var parent = getParent(stateName);
                    if (parent != null) {
                        if (state.parent == parent.name) {
                            states.push(state);
                        }
                    }
                });
            }
            return states;
        }

        function prepMenuCrumb(stateName) {
            var state = stateByName(stateName);
            if (state == undefined) return;
            var result = [];
            var looping = true;
            while (looping) {
                var parent = getParent(state.name);
                if (parent != null && state['abstract'] == undefined) {
                    result.push(parent);
                    state = parent
                } else {
                    looping = false;
                }
            }
            return result.reverse();
        }




    }
})();