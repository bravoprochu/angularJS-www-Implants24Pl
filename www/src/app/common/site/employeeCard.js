(function() {
    'use strict';

    angular
        .module('app')
        .directive('employeeCard', employeeCard);

    employeeCard.$inject = ['$window', 'commonFunctions'];
    
    function employeeCard ($window, cF) {
        // Usage:
        //     <employeeCard></employeeCard>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                fax:'@',
                name:'@',
                phone:'@',
                email: '@'

                
            },
            templateUrl:'app/common/site/employeeCard.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.emailSend = cF.emailSend;
            scope.callMe = function () {
                $window.location.href="tel:" + scope.phone;

            }
        }
    }

})();