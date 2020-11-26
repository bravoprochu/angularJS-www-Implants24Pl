(function() {
    'use strict';

    angular
        .module('app')
        .directive('kategoria', kategoria);

    kategoria.$inject = [];
    
    function kategoria () {
        // Usage:
        //     <kategoria></kategoria>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                info:'@',
                link:'@',
                title: '@',
            },
            templateUrl: 'app/common/kategoria.html',
            transclude:true
        };
        return directive;

        function link(scope, element, attrs) {
            console.log(attrs);
            attrs.$set('flex', 50);
        }
    }

})();