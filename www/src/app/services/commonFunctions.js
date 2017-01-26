(function () {
    'use strict';

    angular
        .module('app')
        .factory('commonFunctions', commonFunctions);

    commonFunctions.$inject = ['$mdDialog', '$mdMedia','$timeout', '$window', '$state', 'toastr', ];

    function commonFunctions($mdDialog, $mdMedia, $timeout, $window, $state, toastr) {

        var configData = {};
        var settings = {
            isHorizontal: ($window.innerWidth*0.8) >= $window.innerHeight ? true: false,
            size: function () { return ($window.innerWidth*0.8) >= $window.innerHeight ? Math.round($window.innerHeight * 0.7) : Math.round($window.innerWidth * 0.7) }(),
        }


        return {
            checkMenuStates: checkMenuStates,
            configData: configData,
            dialogTakNie: dialogTakNie,
            fileNameFromUrl: fileNameFromUrl,
            goTop: goTop,
            imageLinkUpdate:imageLinkUpdate,
            isScreenSmall: isScreenSmall,
            idzDo:idzDo,
            info: info,
            menuShowIfState: menuShowIfState,
            menuPrepare: menuPrepare,
            slideToState: slideToState,
            screenWidth: $window.innerWidth,
            screenHeigh: $window.innerHeight,
            settings: settings,
        };

        
        function checkMenuStates(paramCurrentState) {
            var result = [];
            var currentState = paramCurrentState;
           
            var stillSearch = true;
            var st;
            var stParent;
            while (stillSearch) {
                var found = false;
                angular.forEach($state.get(), function (state) {
                    if (state.name == currentState.name && angular.isDefined(state.parent)) {
                        result.push(state);
                        found = true
                        return st = state;
                    }
                });
                if (found) {
                    angular.forEach($state.get(), function (state) {
                        if (state.name == st.parent) {
                            //                            result.push(state);
                            currentState = state;
                        }
                    });
                } else stillSearch = false;
            }
            return result;
        }

        function dialogTakNie(title, question) {
            var confirm = $mdDialog.confirm()
            .title(title)
            .htmlContent(question)
            .ariaLabel('dialogTakNie')
            .ok('Tak')
            .cancel('Nie');

            return $mdDialog.show(confirm);
        };

        function fileNameFromUrl(url) {
            var urlArr = [];
            var rozszerzenie = [];
            var fileName = [];

            angular.forEach(url, function (znak) {
                urlArr.push(znak);
            })
            urlArr.reverse();
            for (var i = 0; i < urlArr.length; i++) {
                if (urlArr[i] == ".") {
                    urlArr.splice(0, i);
                    break;
                } else {
                    rozszerzenie.push(urlArr[i]);
                }
            }
            rozszerzenie = rozszerzenie.reverse();
            for (var i = 0; i < urlArr.length; i++) {
                if (urlArr[i] == "/") {
                    urlArr.splice(0, i);
                    break;
                } else {
                    fileName.push(urlArr[i]);
                }
            }
            fileName.reverse().splice(fileName.length - 1, 1);
            urlArr.reverse().splice(urlArr.length - 1, 1);

            return {
                fileName : fileName.join(""),
                rozszerzenie : rozszerzenie.join(""),
                domena : urlArr.join("")
            }
        }

        function goTop () {
            console.log('clicked scroll');
            $document.scrollTopAnimated(0).then(function () {
                console && console.log('You just scrolled to the top!');
            });
        }

        function imageLinkUpdate(images, base) {
            var result = [];
            angular.forEach(images, function (img) {
                result.push(base + img);
            });
            return result;
        }

        function info(type, title, message, obj) {
            toastr[type](message, title);
        };

        function isScreenSmall() {
            if ($mdMedia('xs') || $mdMedia('sm')) {
                return true;
            } else return false;
        };

        function idzDo(state) {
            if (isScreenSmall) {
                return $timeout(function () {
                    $state.go(state);
                }, 400);
            } else {
                $state.go(state);
            }
        };

        function menuShowIfState(stateName) {
            return $state.current.name == stateName ? true : false;
        }
        function menuPrepare(parentState) {
            var states = [];
            angular.forEach($state.get(), function (state) {
                if (state.parent == parentState) {
                    states.push(state);
                }
            });
            return states;
        };

        function slideToState(menu, nextOrPrev) {
            //default direction is forward (true)
            var direction = angular.isDefined(nextOrPrev) ? nextOrPrev : true;
            var currentState = $state.current;
            var idx = menu.indexOf(currentState);

            if (direction) {
                if (idx + 1 < menu.length) {
                    idzDo(menu[idx + 1].name);
                }
            } else {
                if (idx - 1 >=0) {
                    idzDo(menu[idx - 1].name);
                }
            }

        }


    }
})();