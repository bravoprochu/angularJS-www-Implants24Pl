(function() {
    'use strict';

    angular
        .module('app')
        .directive('newsContainer', newsContainer);

    newsContainer.$inject = ['commonFunctions'];
    
    function newsContainer (cF) {
        // Usage:
        //     <newsContainer></newsContainer>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            scope:true,
            templateUrl:'app/content/news/newsContainer.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.dane = cF.configData.config.newsCard.dane;
        }
    }

})();