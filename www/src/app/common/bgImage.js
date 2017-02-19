(function() {
    'use strict';

    angular
        .module('app')
        .directive('bgImage', bgImage);

    bgImage.$inject = [];

    function bgImage() {
        // Usage:
        //     <bgImage></bgImage>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
            // scope.filter = angular.isDefined(attrs['filter']) ? attrs['filter'] : "grayscale"
            // scope.filterValue = angular.isDefined(attrs['filterValue']) ? attrs['filterValue'] : 80


            element.css('transition', 'all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s')
            element.css('background-image', 'url("' + attrs['bgImage'] + '")');
            element.css('background-size', '100%');
            element.css('background-repeat', 'no-repeat');
            element.css('background-position', 'center');
            element.css('-webkit-filter', 'grayscale(80%)')


            element.bind('mouseleave', function($event) {
                element.css('background-image', 'url("' + attrs['bgImage'] + '")');
                element.css('background-size', '100%');
                element.css('background-repeat', 'no-repeat');
                element.css('background-position', 'center');
                element.css('-webkit-filter', 'grayscale(80%)')

            });

            element.bind('mouseover', function($event) {
                element.css('background-image', 'url("' + attrs['bgImage'] + '")');
                element.css('background-size', '110%');
                element.css('background-repeat', 'no-repeat');
                element.css('background-position', 'center');
                element.css('-webkit-filter', 'grayscale(0%)')

            });
        }
    }

})();