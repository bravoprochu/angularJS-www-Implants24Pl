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
                var tooltipText = file.fileName;
                // updateSize();


    //            console.log(scope.pic.naturalWidth + '/' + scope.pic.naturalHeight + ' isHorizontal ?' + isHorizontal + 'fileName: '+ file.fileName);


                //            var newEl = '<md-tooltip md-direction="top">' + file.fileName + '</md-tooltip>';

                imagePreload.checkIfExists(file.fileNameBig).then(function (img) {
                    scope.pic.onclick = function () {
                        $window.open(file.fileNameBig, "_blank");
                    };
                    var toolTip = angular.element('<md-tooltip md-direction="top">' + "Otworz w nowym oknie: " + file.fileName + '</md-tooltip>');
                    var newElBaza = angular.element('<div layout layout-align="center center"></div>');
                    var img = angular.element(scope.pic);
                    newElBaza.append(toolTip);
                    newElBaza.append(img);
                    element.append($compile(newElBaza)(scope));

                });


                    var toolTip = angular.element('<md-tooltip md-direction="top">' +file.fileName + '</md-tooltip>');
                    var newElBaza = angular.element('<div layout layout-align="center center class="img-prod"></div>');
                    var img = angular.element(scope.pic);
                    newElBaza.append(toolTip);
                    newElBaza.append(img);
                    element.append($compile(newElBaza)(scope));



                 function updateSize() {
                   var ratio = 0.9;
                   if (isHorizontal) {
                        var _width = cF.settings.viewWidth*ratio;
                        var _height = _width*picRatio;

                       //jeżeli wysokość (po dopasowaniu) jest wieksza od viewHeight
                        if (_height <= cF.settings.viewHeight) {
                            scope.pic.width = _width;
                            scope.pic.height = _height;
                        } else {
                            scope.pic.height = cF.settings.viewHeight * ratio;
                            scope.pic.width = scope.pic.height / picRatio;
                        }
                    }
                   else {
                       var _height = cF.settings.viewHeight * ratio;
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
                        // updateSize();
                    }, 250);
                });

            }
        }

    })();