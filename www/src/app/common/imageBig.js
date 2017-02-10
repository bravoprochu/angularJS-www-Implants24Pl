    (function() {
        'use strict';

        angular
            .module('app')
            .directive('imageBig', imageBig);

        imageBig.$inject = ['$compile','$timeout', '$window','imagePreload', 'commonFunctions'];
    
        function imageBig($compile, $timeout, $window, imagePreload, cF) {
            // Usage:
            //     <imageBig></imageBig>
            // Creates:
            // 
            var directive = {
                link: link,
                restrict: 'E',
                scope: {
                    pic:'='
                }
            };
            return directive;

            function link(scope, element, attrs) {
                var isHorizontal = scope.pic.naturalWidth>=scope.pic.naturalHeight ? true:false;
                var file = cF.fileNameFromUrl(scope.pic.src);
                var picRatio = scope.pic.naturalHeight / scope.pic.naturalWidth;
                scope.pic.name = file.fileName;

                updateSize();


    //            console.log(scope.pic.naturalWidth + '/' + scope.pic.naturalHeight + ' isHorizontal ?' + isHorizontal + 'fileName: '+ file.fileName);


                //            var newEl = '<md-tooltip md-direction="top">' + file.fileName + '</md-tooltip>';
                var toolTip = angular.element('<md-tooltip md-direction="top">'+file.fileName+'</md-tooltip>');
                var newElBaza = angular.element('<div layout layout-align="center center"></div>');
                var img = angular.element(scope.pic);
                newElBaza.append(toolTip);
                newElBaza.append(img);
            

                element.append($compile(newElBaza)(scope));


                //element.append($compile(newElBaza)(scope));
    //            element.append($compile(scope.pic)(scope));

    //            $compile(element)(scope);
                function updateSize() {
                   if (isHorizontal) {
                        var ratio = 0.8;
                        var _width = cF.settings.viewWidth*ratio;
                        var _height = _width*picRatio;

                       //jeżeli wysokość (po dopasowaniu) jest wieksza od viewHeight
                        if (_height <= cF.settings.viewHeight) {
                            scope.pic.width = _width;
                            scope.pic.height = _height;
    //                        console.log('picHeight: ' + picHeight + 'a viewHeight: ' + cF.settings.viewHeight + ' picName: ' + file.fileName);
    //                        scope.pic.width = scope.pic.height * picRatio;
    //                        console.log(picRatio);
                        } else {
                            scope.pic.height = cF.settings.viewHeight * ratio;
                            scope.pic.width = scope.pic.height / picRatio;
                        }
                    }
                   else {
                       var _height = cF.settings.viewHeight* ratio;
                       var _width = _height / picRatio;
                       if (_width <= cF.settings.viewWidth) {
                           scope.pic.height = _height;
                           scope.pic.width = _height / picRatio;
                       } else {
                           scope.pic.width = cF.settings.viewWidth*ratio;
                           scope.pic.height = (cF.settings.viewWidth * ratio) * picRatio;
                       }
                   }
                }




                angular.element($window).bind('resize', function () {
                    $timeout(function () {
                        updateSize();
                    }, 800);
                });


                //var url = attrs['src'];
                //var isHorizontal = cF.settings.isHorizontal;
                //var maxHeight = Math.round(cF.settings.size * 0.8);
                //maxHeight = "100%";
                //var size = isHorizontal ? ' height="' + maxHeight + '"' : ' width="' + maxHeight + '"';
                //size = " width=70%";

                //var file = cF.fileNameFromUrl(url);
                //var bigUrl = file.domena + "/" + file.fileName + "_big." + file.rozszerzenie;
                //imagePreload.checkIfExists(bigUrl).then(function (img) {
                //    var newEl = '<div><md-tooltip md-direction="top">Kliknij by powiększyć '+ file.fileName+'</md-tooltip><img src=' + url + size + '/></div>';
                //    element.append($compile(newEl)(scope));
                //    element.bind('click', function ($event) {
                //        $window.open(bigUrl, '_blank');
                //    });
                
                //}, function (url_brakFoty) {
                //    var newEl = '<div><md-tooltip md-direction="top">'+file.fileName +'</md-tooltip><img src=' + url + size + '/></div>';
                //    element.append($compile(newEl)(scope));
                //});

                //var newEl = '<div><md-tooltip md-direction="top">' + file.fileName + '</md-tooltip><img src=' + url + size + '/></div>';
                //element.append($compile(newEl)(scope));

            }
        }

    })();