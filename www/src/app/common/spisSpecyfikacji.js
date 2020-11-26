(function() {
    'use strict';

    angular
        .module('app')
        .directive('spisSpecyfikacji', spisSpecyfikacji);

    spisSpecyfikacji.$inject = ['$state'];
    
    function spisSpecyfikacji ($state) {
        // Usage:
        //     <spisSpecyfikacji></spisSpecyfikacji>
        // Creates:
        // 
        var directive = {
            //controller: 'spisSpecyfikacjiCtrl',
            //controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/common/spisSpecyfikacji.html',
            scope: {
                menu: '=',
            }

        };
        return directive;

        function link(scope, element, attrs) {
            scope.goTo = goTo;

            function goTo(stateName) {
                $state.go(stateName);
            }
        }
    }

})();