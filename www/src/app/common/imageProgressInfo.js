(function() {
    'use strict';

    angular
        .module('app')
        .directive('imageProgressInfo', imageProgressInfo);

    imageProgressInfo.$inject = ['$window'];
    
    function imageProgressInfo ($window) {
        // Usage:
        //     <imageProgressInfo></imageProgressInfo>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'app/common/imageProgressInfo.html',
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();