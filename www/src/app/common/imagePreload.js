(function () {
    'use strict';

    angular
        .module('app')
        .factory('imagePreload', imagePreload);

    imagePreload.$inject = ['$q'];

    function imagePreload($q) {
        var imagesTotal = 0;
        var info = "";
        var resolved = [];
        var rejected = [];


        var service = {
            checkIfExists: checkIfExists,
            getInfo: getInfo,
            setInfo:setInfo,
            info: info,
            preload: preload,
            
        };

        return service;


        function checkIfExists(url) {
            var deferImg = $q.defer();
            var img = new Image();
            img.src = url;
            img.onload = function ($event) {
                deferImg.resolve(img);
            }
            img.onerror = function ($event) {
                deferImg.reject(url);
            }
            return deferImg.promise;
        }


        function setInfo(txt) {
            info = txt;
        }

        function getInfo() {
            return info.length > 0 ? info : null;
        }

        function preload(imagesLinks, fromWho) {
            var defer = $q.defer();
            var deferAll = [];
            resolved = [];
            rejected = [];
            imagesTotal = imagesLinks.length;

            angular.forEach(imagesLinks, function (img) {
                if (img != null) { deferAll.push(preloadImage(img)); }
            });

            $q.all(deferAll).then(function (ok) {
                defer.resolve(resolved);
            }, function (error) {
                defer.reject(rejected);
            });

            return defer.promise;


            function preloadImage(srcImg) {
                var deferImg = $q.defer();
                var img = new Image();
                img.src = srcImg;
                img.onload = function ($event) {
                    resolved.push(img);
                    deferImg.resolve(img);
                    setInfo("Trwa pobieranie: " + fromWho+" "+ resolved.length + "/" + imagesTotal);
                    defer.notify('pobrałem: ' + srcImg);
                }
                img.onerror = function ($event) {
                    rejected.push(srcImg)
                    deferImg.reject(srcImg);
                    setInfo("Trwa pobieranie: " + fromWho+" "+ resolved.length + "/" + imagesTotal);
                    defer.notify('błąd: ' + srcImg);
                }
                return deferImg.promise;
            }
        }



    }
})();