(function() {
    'use strict';

    angular
        .module('app')
        .directive('contactCard', contactCard);

    contactCard.$inject = ['$window'];
    
    function contactCard ($window) {
        // Usage:
        //     <contactCard></contactCard>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl:'app/content/contact/contact.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();