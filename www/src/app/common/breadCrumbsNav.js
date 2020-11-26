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
        };

        return directive;

        function link(scope, element, attrs) {
        }
    };



})();