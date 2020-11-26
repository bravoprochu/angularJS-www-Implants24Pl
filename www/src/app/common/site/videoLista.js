(function() {
    'use strict';

    angular
        .module('app')
        .directive('videoLista', videoLista);

    videoLista.$inject = ['commonFunctions'];
    
    function videoLista (cF) {
        // Usage:
        //     <videoLista></videoLista>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            scope:{
                height: '='
            },
            templateUrl: 'app/common/site/videoLista.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.dane = cF.configData.config.videoCard.dane;
        }
    }

})();