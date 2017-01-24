(function() {
    'use strict';

    angular
        .module('app')
        .directive('siteHeader', siteHeader);

    siteHeader.$inject = ['$state', 'commonFunctions', 'slajdy'];
    
    function siteHeader($state, cF, slajdy) {
        // Usage:
        //     <siteHeader></siteHeader>
        // Creates:
        // 
        var directive = {
            link: link,
            scope:true,
            restrict: 'E',
            templateUrl:'app/common/site/siteHeader.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.isScreenSmall = cF.isScreenSmall();
            scope.stop = stop;
            scope.resume = resume;
            scope.isPlaying = false;
            scope.homeState = homeState;

            
            scope.resume();


            function homeState() {
                return $state.current.name;
            }

            function stop() {
                scope.isPlaying = false;
                slajdy.stopInterval();
            }

            function resume() {
                scope.isPlaying = true;
                slajdy.resumeInterval();
            }



        }
    }

})();