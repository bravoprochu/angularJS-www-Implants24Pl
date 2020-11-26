(function() {
    'use strict';

    angular
        .module('app')
        .directive('videoContainer', videoContainer);

    videoContainer.$inject = ['commonFunctions'];
    
    function videoContainer (cF) {
        // Usage:
        //     <videoContainer></videoContainer>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                idx:'@'
            },
            templateUrl:'app/content/video/videoContainer.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.dane = cF.configData.config.videoCard.dane[scope.idx];
        }
    }

})();