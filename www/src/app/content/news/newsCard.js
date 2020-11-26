(function() {
    'use strict';

    angular
        .module('app')
        .directive('newsCard', newsCard);

    newsCard.$inject = ['$window'];
    
    function newsCard ($window) {
        // Usage:
        //     <newsCard></newsCard>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                caption:'@',
                descr: '@',
                image: '@',
                link: '@',
                source:'@',
                subtitle: '@',
                theme: '@',
                title: '@',                
                
            },
            templateUrl:'app/content/news/newsCard.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.przejdzDalej = scope.caption == "" ? "Przejdź do" : scope.caption;
        }
    }

})();