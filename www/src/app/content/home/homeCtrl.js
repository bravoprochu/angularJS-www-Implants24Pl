(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [ '$http','$rootScope','$scope', 'commonFunctions', '$state', 'slajdy'];

    function homeCtrl($http,$rootScope, $scope, cF, $state, slajdy) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Home';
        vm.subTitle = 'Start';
        vm.isScreenSmall = cF.isScreenSmall();

        vm.dane = {};
        vm.idzDo = cF.idzDo;
        vm.startMode = false;
        vm.screenSmall = cF.isScreenSmall();

//        siteMap();



        vm.tabSelectedIndex = slajdy.tabSelectedIndex;
        vm.stopInterval = slajdy.stopInterval;
        vm.resumeInterval = slajdy.resumeInterval;

       
        $scope.$watch('vm.tabSelectedIndex()', function (newVal) {
            vm.selectedIdx=newVal
        });

        $rootScope.$watch('configDataLoaded', function (newVal) {
            if (newVal == true) {
                vm.startMode = true;
            }
        })

        function siteMap() {
            var result = [];
            var count = 1;

            angular.forEach($state.get(), function (state) {
                var parents = [];
                if (state.url !== undefined) {
                    
//                    console.log(count+') stateName: '+state.name);
                    count++;

                        var isDefined = true;
                        var stateParent = state.name;
                        var insideCount = 1

                        while (isDefined) {
                            var foundParent = false;
                            angular.forEach($state.get(), function (s) {
                                if (s.name == stateParent && s.url!==undefined) {
                                    parents.push(s.url);
                                    if (s.parent !== undefined) {
                                        stateParent = s.parent;
                                        foundParent = true;
                                    }
                                } 

                            });
                            isDefined = foundParent === true ? true : false;
                        }

                    result.push(addUrlTag(parents.reverse().join("")));
                }
                //console.log('parents join:');
                //console.log(parents.join());
                 
            })

           
            function addUrlTag(data) {

                return '<url><loc>http://www.implants24.pl' + data + '</loc></url>'+' <url><loc>http://implants24.pl' + data + '</loc></url>';
            }


            console.log(result);
        };
    };
})();
