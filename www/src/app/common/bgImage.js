(function() {
    'use strict';

    angular
        .module('app')
        .directive('bgImage', bgImage);

    bgImage.$inject = [];
    
    function bgImage () {
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

            element.css('transition', 'all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s')
            element.css('background-image', 'url("' + attrs['bgImage'] + '")');
            element.css('background-size', '100%');
            element.css('background-repeat', 'no-repeat');
            element.css('background-position', 'center');
            element.css('-webkit-filter', 'grayscale(60%)')


            element.bind('mouseleave', function ($event) {
                element.css('background-image', 'url("' + attrs['bgImage'] + '")');
                element.css('background-size', '100%');
                element.css('background-repeat', 'no-repeat');
                element.css('background-position', 'center');
                element.css('-webkit-filter','grayscale(60%)')
               
            });

            element.bind('mouseover', function ($event) {
                element.css('background-image', 'url("' + attrs['bgImage'] + '")');
                //element.css('position', 'static');
                //element.css('left', '-50px');
                //element.css('top', '-50px');
                element.css('background-size', '115%');
                element.css('background-repeat', 'no-repeat');
                element.css('background-position', 'center');
                element.css('-webkit-filter', 'grayscale(0%)')

            });
        }
    }

})();