(function() {
    'use strict';

    angular
        .module('app')
        .directive('footer', footer);

    footer.$inject = ['$window'];
    
    function footer ($window) {
        // Usage:
        //     <footer></footer>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'app/common/site/footer.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();