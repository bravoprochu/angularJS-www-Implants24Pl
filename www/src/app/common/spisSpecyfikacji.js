(function() {
    'use strict';

    angular
        .module('app')
        .directive('spisSpecyfikacji', spisSpecyfikacji);

    spisSpecyfikacji.$inject = ['commonFunctions'];
    
    function spisSpecyfikacji (cF) {
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
                menuShow:'='
            }

        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();