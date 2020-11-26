(function() {
    'use strict';

    angular
        .module('app')
        .directive('swipeInfo', swipeInfo);

    swipeInfo.$inject = ['$window', '$timeout'];
    
    function swipeInfo ($window, $timeout) {
        // Usage:
        //     <swipeInfo></swipeInfo>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'app/common/swipeInfo.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.visible = true;
            scope.width = 100;

            var screenHeight = $window.innerHeight;
            var screenWidth = $window.innerWidth;

            var isHorizontal = screenHeight < screenWidth ? true : false;
            
            scope.width = isHorizontal === true ? screenWidth / 3 : screenHeight / 3;



            $timeout(function () {
                scope.visible = false;
            }, 2500)

        }
    }

})();