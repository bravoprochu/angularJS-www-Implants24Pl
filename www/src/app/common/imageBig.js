﻿(function() {
    'use strict';

    angular
        .module('app')
        .directive('imageBig', imageBig);

    imageBig.$inject = ['$compile', '$window','imagePreload', 'commonFunctions'];
    
    function imageBig($compile, $window, imagePreload, cF) {
        // Usage:
        //     <imageBig></imageBig>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E'
        };
        return directive;

        function link(scope, element, attrs) {

            var url = attrs['src'];
            var isHorizontal = cF.settings.isHorizontal;
            var maxHeight = Math.round(cF.settings.size * 0.8);
            maxHeight = "100%";
            var size = isHorizontal ? ' height="' + maxHeight + '"' : ' width="' + maxHeight + '"';
            size = " width=70%";

            var file = cF.fileNameFromUrl(url);
            var bigUrl = file.domena + "/" + file.fileName + "_big." + file.rozszerzenie;
            //imagePreload.checkIfExists(bigUrl).then(function (ok) {
            //    var newEl = '<div><md-tooltip md-direction="top">Kliknij by powiększyć '+ file.fileName+'</md-tooltip><img src=' + url + size + '/></div>';
            //    element.append($compile(newEl)(scope));
            //    element.bind('click', function ($event) {
            //        $window.open(bigUrl, '_blank');
            //    });
                
            //}, function (url_brakFoty) {
            //    var newEl = '<div><md-tooltip md-direction="top">'+file.fileName +'</md-tooltip><img src=' + url + size + '/></div>';
            //    element.append($compile(newEl)(scope));
            //});

            var newEl = '<div><md-tooltip md-direction="top">' + file.fileName + '</md-tooltip><img src=' + url + size + '/></div>';
            element.append($compile(newEl)(scope));

        }
    }

})();