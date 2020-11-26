(function() {
    'use strict';

    angular
        .module('app')
        .directive('videoCard', videoCard);

    videoCard.$inject = ['$sce'];
    
    function videoCard($sce) {
        // Usage:
        //     <videoCard></videoCard>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                url: '@',
                poster: '@',
                title:'@'

            },
            templateUrl: 'app/content/video/videoCard.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.sources = [
                { src: $sce.trustAsResourceUrl(scope.url), type: "video/mp4" },
            ];
            scope.tracks = [
                //{
                //    src: "video/ARROW piste 1.mp4",
                //    kind: "subtitles",
                //    srclang: "en",
                //    label: "English",
                //    default: ""
                //}
            ];
            scope.plugins = {

            };

            
        }
    }

})();