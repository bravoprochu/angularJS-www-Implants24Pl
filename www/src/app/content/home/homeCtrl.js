(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$interval', '$http', '$scope', '$rootScope', 'commonFunctions', '$state', 'imagePreload'];

    function homeCtrl($interval, $http, $scope, $rootScope, cF, $state, imagePreload) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'home';
        vm.subTitle = 'Start';
        vm.isScreenSize = cF.isScreenSize;

        vm.dane = {};
        vm.idzDo = cF.idzDo;


        vm.images = cF.getImageList(vm.title);
        vm.getImageUrl = getImageUrl;
        vm.menuShow = menuShow;
        vm.settings = cF.settings;
        vm.zmiana = true;

        vm.videoBgId = "RJZl98ZQrnc";

        //$interval(function () {
        //    vm.zmiana = !vm.zmiana;
        //},5000)


        function getImageUrl(idx) {
            return cF.getImageUrl(idx, vm.title);
        }

        function menuShow() {
            return cF.menuShowIfState(vm.title);
        };





        imagePreload.preload(vm.images, vm.title).then(function (ok) {
            vm.startMode = true;
        }, function (error) {
            console.log(error);
        }, function (notify) {
            vm.preloadInfo = notify;
        });











//        siteMap();



        //vm.tabSelectedIndex = slajdy.tabSelectedIndex;
        //vm.stopInterval = slajdy.stopInterval;
        //vm.resumeInterval = slajdy.resumeInterval;

       
        //$scope.$watch('vm.tabSelectedIndex()', function (newVal) {
        //    vm.selectedIdx=newVal
        //});

        //$rootScope.$watch('configDataLoaded', function (newVal) {
        //    if (newVal == true && vm.startMode==true) {
        //        vm.startMode = true;
        //    }
        //})

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
