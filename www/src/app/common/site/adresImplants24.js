(function() {
    'use strict';

    angular
        .module('app')
        .directive('adresImplants24', adresImplants24);

    adresImplants24.$inject = [];
    
    function adresImplants24 () {
        // Usage:
        //     <adresImplants24></adresImplants24>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl:'app/common/site/adresImplants24.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();