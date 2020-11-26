(function() {
    'use strict';

    angular
        .module('app')
        .directive('mainMenu', mainMenu);

    mainMenu.$inject = [];
    
    function mainMenu () {
        // Usage:
        //     <mainMenu></mainMenu>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl:'app/common/site/mainMenu.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();