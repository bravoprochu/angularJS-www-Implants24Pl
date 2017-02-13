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


            for (var i = 0; i < imagesLinks.length; i++) {
                deferAll[i] = preloadImage(imagesLinks[i], i);
            }


            $q.all(deferAll).then(function (ok) {
                defer.resolve(resolved);
                
            }, function (error) {
                defer.reject(rejected);
            });

            return defer.promise;


            function preloadImage(srcImg, idx) {
                var deferImg = $q.defer();
                var img = new Image();
                img.src = srcImg;
                img.onload = function ($event) {
                    resolved[idx]=img;
                    deferImg.resolve(img);
                    defer.notify('pobrałem: ' + srcImg);
                }
                img.onerror = function ($event) {
                    rejected[idx] = srcImg;
                    deferImg.reject(srcImg);
                    defer.notify('błąd: ' + srcImg);
                }
                return deferImg.promise;
            }
        }



    }
})();