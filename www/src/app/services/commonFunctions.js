(function () {
    'use strict';

    angular
        .module('app')
        .factory('commonFunctions', commonFunctions);

    commonFunctions.$inject = ['$mdDialog', '$mdMedia','$timeout', '$window', '$state', 'imagesUrl', 'toastr', 'statesHelp'];

    function commonFunctions($mdDialog, $mdMedia, $timeout, $window, $state, imagesUrl, toastr, statesHelp) {

        var configData = {};
        var settings = {}
        settingsUpdate();

        return {
            checkMenuStates: checkMenuStates,
            configData: configData,
            dialogTakNie: dialogTakNie,
            emailSend: emailSend,
            fileNameFromUrl: fileNameFromUrl,
            getImageUrl: getImageUrl,
            getImageList:getImageList,
            goTop: goTop,
            imageLinkUpdate:imageLinkUpdate,
            isScreenSmall: isScreenSmall,
            isScreenSize: isScreenSize,
            idzDo:idzDo,
            info: info,
            menuShowIfState: menuShowIfState,
            menuPrepare: menuPrepare,
            slideToState: slideToState,
            settings: settings,
            settingsUpdate:settingsUpdate
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

        function emailSend(email) {
            $window.open("mailto:" + email + "?subject= Pytanie ofertowe &body=" , "_self");
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

            var result = {
                fileName : fileName.join(""),
                rozszerzenie : rozszerzenie.join(""),
                domena: urlArr.join(""),
            }
            result.fileNameBig = result.domena +"/"+ result.fileName + "_big." + result.rozszerzenie;


            return result;
        }

        function getImageList(key) {
            return angular.isDefined(imagesUrl[key]) == true ? imagesUrl[key] : [];
        }

        function getImageUrl(idx, key) {
            var brakFotki = 'images/inProgress.png';
            if(angular.isDefined(imagesUrl[key]) == true ){
                var images = imagesUrl[key];
                return images.length > idx ? images[idx] : brakFotki;
            } else {
                return brakFotki;
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

        function isScreenSize(value) {
            return $mdMedia(value);
        }

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

        function menuPrepare() {
            var currState = $state.current
            if (statesHelp.isParent(currState.name)==false) {
                return angular.isDefined(currState.parent) == true ? statesHelp.prepMenu(currState.parent) : null;
            }
            return null;


        };

        function settingsUpdate() {
            settings.partW = $mdMedia('gt-md') ? 0.65 : 0.88;
            settings.partH = 0.85;
            settings.height= $window.innerHeight;
            settings.isHorizontal= ($window.innerWidth) >= $window.innerHeight ? true : false;
            //settings.viewHeight = Math.round($window.innerHeight * settings.partH);
            settings.viewHeight = Math.round(($window.innerHeight - (2*settings.headerHeight))*0.9);
            settings.viewWidth = Math.round($window.innerWidth * settings.partW);
            settings.width = $window.innerWidth;
        }
        


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