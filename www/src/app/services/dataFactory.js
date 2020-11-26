(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataFactory', dataFactory);

    dataFactory.$inject = ['$http', '$rootScope', 'commonFunctions'];

    function dataFactory($http, $rootScope, cF) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            $http.get('implants24.json').then(function (res) {
                cF.configData = res.data;
                $rootScope.configDataLoaded = true;
            }, function (error) {
                console.log('error');
                console.log(error);
            });
        }
    }
})();